// Post component
import React, { useState } from 'react';

function Post({ addUser }) {
  const [username, setUsername] = useState("");
  const [Tel, setTel] = useState("");
  const [image, setImage] = useState("");

  const handleAdd = () => {
    const user = {
      username,
      Tel,
      image
    };
    addUser(user);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="tel"
        placeholder="Telephone"
        value={Tel}
        onChange={(e) => setTel(e.target.value)}
      />
      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <button onClick={handleAdd}>Add User</button>
    </div>
  );
}

export default Post;
