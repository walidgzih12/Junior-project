const connection = require("../database/index.js");

const getUserByUsername = (username) => {
    return new Promise((resolve, reject) => {
        const query = "SELECT * FROM user WHERE username = ?";
        connection.query(query, [username], (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
};
const postUsers = (user) => {
    return new Promise((resolve, reject) => {
        const sql = "INSERT INTO user (username, Tel, password, image) VALUES (?, ?, ?, ?)";
        const values = [user.username, user.Tel, user.password, user.image]; // Ensure correct property names
        connection.query(sql, values, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
};
const getAllProducts = () => {
    return new Promise((resolve, reject) => {
        const sql= "SELECT * FROM product";
        connection.query(sql , (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
};

const postProduct = (product) => {
    return new Promise((resolve, reject) => {
        const { image, productname, description, category, date, delivery } = product;
        const sql = "INSERT INTO product (image, productname, description, category, date, delivery) VALUES (?, ?, ?, ?, ?, ?)";
        const values = [image, productname, description, category, date, delivery];
        connection.query(sql, values, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
};

const getProductsByCategory = (category) => {
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM product WHERE category = ?";
        connection.query(sql, [category], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
};

function getProductsByUserId(userId) {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM products WHERE user_id = ?";
      connection.query(query, [userId], (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }
  function updateProductById(productId, updatedProduct) {
    return new Promise((resolve, reject) => {
      const { image, productname, description, category, date, delivery } = updatedProduct;
      const sql = "UPDATE product SET image = ?, productname = ?, description = ?, category = ?, date = ?, delivery = ? WHERE id = ?";
      const values = [image, productname, description, category, date, delivery, productId];
      connection.query(sql, values, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }

  function deleteProductById(productId) {
    return new Promise((resolve, reject) => {
      const sql = "DELETE FROM product WHERE id = ?";
      connection.query(sql, [productId], (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }
  
module.exports = { getUserByUsername, postUsers ,
    getAllProducts,postProduct ,
    getProductsByCategory,getProductsByUserId,
    updateProductById,deleteProductById
};