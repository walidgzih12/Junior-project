import React, { useState } from 'react';
import axios from 'axios';
import './post-product.css'; 


function PostProductForm({ onClose }) {
  const [productname, setProductname] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');
  const [delivery, setDelivery] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3050/api/postproduct', {
        productname,
        description,
        image,
        category,
        delivery,
      });
      onClose(); 
    } catch (error) {
      console.error('Error posting product:', error);
    }
  };

  return (
    <div className="post-product-form">
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={productname} onChange={(e) => setProductname(e.target.value)} />
        </label>
        <label>
          Description:
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <label>
          Image URL:
          <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
        </label>
        <label>
          Category:
          <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
        </label>
        <label>
          Delivery:
          <input type="text" value={delivery} onChange={(e) => setDelivery(e.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default PostProductForm;
