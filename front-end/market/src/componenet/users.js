// Users component
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Post from "../componenet/Post.js";

function Users() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    axios.get('http://localhost:3050/api/allusers')
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function addUser(user) {
    axios.post('http://localhost:3050/api/postusers', user)
      .then((res) => {
        console.log(res.data);
        // Assuming you want to update the data after adding a user
        fetchData();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      {data.map((user, index) => (
        <div key={index}>
          <h6>Username: {user.username}</h6>
          <h6>Telephone: {user.Tel}</h6>
          <img src={user.image} alt="user" />
        </div>
      ))}
      <Post addUser={addUser} />
    </div>
  );
}

export default Users;
