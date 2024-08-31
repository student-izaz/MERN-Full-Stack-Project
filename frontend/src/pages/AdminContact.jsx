import React, { useEffect, useState } from 'react';
import './AdminContact.css';
import { useAuth } from '../store/auth';
import { toast } from 'react-toastify';


function AdminContact() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);

  const { authorizationToken } = useAuth();

  const getAllContacts = async () => {
    setLoading(true);
    const response = await fetch(`http://localhost:5000/api/admin/contact`, {
      method: 'GET',
      headers: {
        Authorization: authorizationToken,
      }
    });
    const contactData = await response.json();
    if(response.ok) {
      setContacts(contactData);
      setLoading(false);
    }
  };

  useEffect(()=>{
    getAllContacts();
  }, []);

  const deleteContact = async (id) => {
    try {
      confirm("Do you want to delete this contact!");
      const response = await fetch(`http://localhost:5000/api/admin/delete_contact/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: authorizationToken,
        },
      });
      if(response.ok){
        toast.success("User Delete Successfully!");
      }
    } catch (error) {
      console.log('delete contact', error);
    }
  }

  return (
    <div className='admin-contact'>
      <h1>All Contact</h1>

      {!contacts.length > 0 ? "No Records Found!" : 
      <div className="table-container">
        <table className="user-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone No</th>
              <th>Message</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {contacts.map((cnt, index) => {
              return (
                <tr key={cnt._id}>
                  <td>{index}</td>
                  <td>{cnt.name}</td>
                  <td>{cnt.email}</td>
                  <td>{cnt.phone_no}</td>
                  <td>{cnt.message}</td>
                  <td className="actions">
                    <button
                      className="dlt-user"
                      onClick={() => deleteContact(cnt._id)}
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
      }
    </div>
  )
}

export default AdminContact
