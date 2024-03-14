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
const getProductsByUserId = (userId) => {
    return new Promise((resolve, reject) => {
        const sql = `
            SELECT p.*
            FROM product p
            INNER JOIN user u ON p.idproduct = u.product_idproduct
            WHERE u.iduser = ?;
        `;
        connection.query(sql, [userId], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
};


module.exports = { getUserByUsername, postUsers ,getAllProducts,postProduct ,getProductsByCategory,getProductsByUserId};
   