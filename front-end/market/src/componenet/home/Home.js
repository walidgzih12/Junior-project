import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.css'; 
import Nav from '../NavBar/Navbar.jsx'; 
import PostProductForm from '../post product/post-product.js';
import '../Login/Login.js' 

function Home(props) {
  const [products, setProducts] = useState([]);
  const [showForm, setShowForm] = useState(false); 

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3050/api/allproducts');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleToggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div>
      <Nav />
      <button className="btn" onClick={handleToggleForm}>Add Product</button>
      {showForm && <PostProductForm onClose={handleToggleForm} />}
      <div className="portfolio-cards--container">
        {products.map(product => (
          <div key={product.id} className="portfolio-cards--card">
            <div
              className="portfolio-cards--card-overlay"
              style={{
                backgroundImage: `url(${product.image})`
              }}
            ></div>
            <div className="portfolio-cards--card-content">
              <h2 className="portfolio-cards--card-title">{product.name}</h2>
              <p>{product.description}</p>
              <h5>Date: {product.date}</h5>
              <h5>Category: {product.category}</h5>
              <p>Delivery: {product.delivery}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;