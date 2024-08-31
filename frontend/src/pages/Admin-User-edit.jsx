import React, { useEffect, useState } from "react";
import "./Admin-User-edit.css";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../components/Loading";

function AdminUseredit() {
  const [currUser, setCurrUser] = useState('');
  const [loading, setLoading] = useState(false);
  const {id} = useParams();

  const getCurrUser = async () => {
    try {
      setLoading(true);
      const response = await fetch(`http://localhost:5000/api/admin/user/${id}`, {
        method: "GET",
        headers: {
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjRiODg4MmE1MzJjOTQzNTI3YmFlNDQiLCJlbWFpbCI6Iml6YXphaG1lZEBnbWFpbC5jb20iLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE3MjIxNjQ2MTQsImV4cCI6MTcyNDc1NjYxNH0.HmqakRQA-c6Kt7CdeJyl_w_GQiwjNiN5nC3ZHYPSQ3Y",
        },
      });
      const data = await response.json();
      if (response.ok) {
        setLoading(false);
        setCurrUser(data);
      }
    } catch (error) {
      console.log("getAllUsres", error);
    }
  };

  useEffect(()=>{
    getCurrUser();
  },[]);

  const handleInputData = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setCurrUser({
      ...currUser,
      [name]: value,
    });
  };

  const submitUpdateData = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await fetch(`http://localhost:5000/api/admin/user/edit/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjRiODUxYzU1Y2U3ODBiMDQ5ODhmMTYiLCJlbWFpbCI6Imtvc2hhbEBnbWFpbC5jb20iLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE3MjIyNTIzMjAsImV4cCI6MTcyNDg0NDMyMH0.nwI9Zs40s_MNqlhoecYNWnIMw2IbOfoQboFVy9cJzBs"
        },
        body: JSON.stringify(currUser),
      });

      if (response.ok) {
        setLoading(false  );
        toast.success("User Update Successfully!")
      }
      } catch (error) {
        console.log('User Update', error)
      }
  };

  return (
    <div className="update-form-container">
      <h2>Edit User</h2>
      {/* Set Loading State In a Components */}
      {loading ? <Loading/> : ""}
      <form className="register-form" onSubmit={submitUpdateData}>
        <div>
          <i className="fa-solid fa-user"></i>
          <input
            type="text"
            name="name"
            className="input"
            placeholder="Name of Student"
            onChange={handleInputData}
            value={currUser.name}
          />
          <i className="fa-sharp fa-solid fa-phone-volume"></i>
          <input
            type="number"
            className="input"
            placeholder="Mobile No."
            name="phone_no"
            onChange={handleInputData}
            value={currUser.phone_no}
          />
          <i className="fa-regular fa-envelope"></i>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
            onChange={handleInputData}
            value={currUser.email}
          />
          <i className="fa-solid fa-list"></i>
          <input
            type="text"
            className="input"
            placeholder="Apply For"
            name="apply_for"
            onChange={handleInputData}
            value={currUser.apply_for}
          />
          <i className="fa-solid fa-signal"></i>
          <select
            name="training_mode"
            id=""
            onChange={handleInputData}
            value={currUser.training_mode}
          >
            <option value="Trainin Mode">Training Mode</option>
            <option value="Online">Online</option>
            <option value="Ofline">Ofline</option>
          </select>
          <i className="fa-solid fa-graduation-cap"></i>
          <input
            type="text"
            className="input"
            name="collage"
            placeholder="Collage Name"
            onChange={handleInputData}
            value={currUser.collage}
          />
          <i className="fa-solid fa-layer-group"></i>
          <input
            type="text"
            className="input"
            name="course"
            placeholder="Select Course"
            // onChange={handleInputData}
            value={currUser.course}
          />
          <i className="fa-solid fa-calendar-days"></i>
          <select
            name="year"
            id="select-_option"
            // onChange={handleInputData}
            value={currUser.year}
          >
            <option value="Year">Year</option>
            <option value="2021">2024</option>
            <option value="2022">2023</option>
            <option value="2023">2022</option>
            <option value="2024">2021</option>
          </select>
          <input type="submit" className="Reg-btn" value="UPDATE NOW" />
        </div>
      </form>
    </div>
  );
}

export default AdminUseredit;
