import React, { useEffect, useState } from 'react'

function Admin() {
    const [userData, setUserData] = useState([]);

    const getAllUsers = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/admin/users', {
                method: 'GET'   
            });
            const data = await response.json();
            setUserData(data);
            if(response.ok){
                setUserData(data);
            }
        } catch (error) {
            console.log('Admin users : ',error);
        }
    }

    useEffect(()=>{
        getAllUsers();
    },[])
  return (
    <div>
      <h1>Users Data</h1>
      {userData.map((user) => {
        return <p key={user._id}>{user.name}</p>
      })}
    </div>
  )
}

export default Admin

