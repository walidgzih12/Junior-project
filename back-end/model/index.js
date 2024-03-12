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

module.exports = { getUserByUsername, postUsers };
