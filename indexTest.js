//index.js(controller)

// const model = require('../model/index.js');
// const bcrypt = require('bcrypt');

// const getUserByUsername = async (username) => {
//     try {
//         const result = await model.getUserByUsername(username);
//         return result;
//     } catch (err) {
//         throw err;
//     }
// };

// const postUser = async (req, res) => {
//     try {
//         const { username, Tel, password, image } = req.body;
//         const userExists = await model.getUserByUsername(username);
//         if (userExists.length > 0) {
//             return res.status(409).json({ message: "User already exists" });
//         }
//         const hashedPassword = await bcrypt.hash(password, 10);
//         const newUser = {
//             username,
//             Tel,
//             image,
//             password: hashedPassword,
//         };
//         await model.postUsers(newUser);
//         res.status(201).json({ message: "User created successfully" });
//     } catch (err) {
//         console.log("from catch", err);
//         res.status(500).send(err);
//     }
// };
// const loginUser = async(req,res)=>{
//     try {
//       const {username,password}=req.body
//       const bool=await model.getUserByUsername(username)
//       if(bool.length ===0 || !bool){
//         res.status(404).json({message:"User not found"})
//         return;
//       } 
//       else {
//         const userRow=bool[0];
//         const passwordMatch= await bcrypt.compare(password,userRow.password);
//         if(passwordMatch){
//           res.status(200).send("you are logged")
//       }
//       else res.status(400).send("wrong password or username ")
//     }}
//     catch(err){
//     res.status(500).send(err)
//     }
//   };
// module.exports = { getUserByUsername, postUser,loginUser };
/////////////////////




// index.js(model)
// const connection = require("../database/index.js");

// const getUserByUsername = (username) => {
//     return new Promise((resolve, reject) => {
//         const query = "SELECT * FROM user WHERE username = ?";
//         connection.query(query, [username], (err, result) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(result);
//             }
//         });
//     });
// };
// const postUsers = (user) => {
//     return new Promise((resolve, reject) => {
//         const sql = "INSERT INTO user (username, Tel, password, image) VALUES (?, ?, ?, ?)";
//         const values = [user.username, user.Tel, user.password, user.image]; // Ensure correct property names
//         connection.query(sql, values, (err, result) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(result);
//             }
//         });
//     });
// };

// module.exports = { getUserByUsername, postUsers };
