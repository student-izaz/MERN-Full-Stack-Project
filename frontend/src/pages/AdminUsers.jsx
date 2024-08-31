import React, { useEffect, useState } from "react";
import "./AdminUsers.css";
import Loading from "../components/Loading";
import { Link } from "react-router-dom";
import { useAuth } from "../store/auth";

function AdminUsers() {
  const [allUsers, setAllUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const { authorizationToken } = useAuth();

  const getAllUsers = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:5000/api/admin/users", {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      if (response.ok) {
        setAllUsers(data);
        setLoading(false);
      }
    } catch (error) {
      console.log("getAllUsres", error);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  const deleteUser = async (id) => {
    try {
      confirm("Do you want to delete this user!");
      await fetch(`http://localhost:5000/api/admin/deleteUser/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: authorizationToken,
        },
      });
    } catch (error) {
      console.log("Delete User Error", error);
    }
  };

  return (
    <div className="admin-users">
      <h1>All Users</h1>

      {/* Display All User Data */}
      <div className="table-container">
        <table className="user-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone No</th>
              <th>Appl For</th>
              <th>Mode</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {allUsers.map((user, index) => {
              return (
                <tr key={user._id}>
                  <td>{index}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone_no}</td>
                  <td>{user.apply_for}</td>
                  <td>{user.training_mode}</td>
                  <td className="actions">
                    <button className="edit-user">
                      <Link to={`/admin/user/edit/${user._id}`}>
                        <i className="fa-solid fa-pen"></i>
                      </Link>
                    </button>
                    <button
                      className="dlt-user"
                      onClick={() => deleteUser(user._id)}
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {/* Set Loading State In a Components */}

      {loading ? <Loading /> : ""}
    </div>
  );
}

export default AdminUsers;
