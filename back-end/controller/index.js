const model = require('../model/index.js');
const bcrypt = require('bcrypt');

const getUserByUsername = async (username) => {
    try {
        const result = await model.getUserByUsername(username);
        return result;
    } catch (err) {
        throw err;
    }
};

const postUser = async (req, res) => {
    try {
        const { username, Tel, password, image } = req.body;
        const userExists = await model.getUserByUsername(username);
        if (userExists.length > 0) {
            return res.status(409).json({ message: "User already exists" });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = {
            username,
            Tel,
            image,
            password: hashedPassword,
        };
        await model.postUsers(newUser);
        res.status(201).json({ message: "User created successfully" });
    } catch (err) {
        console.log("from catch", err);
        res.status(500).send(err);
    }
};
const loginUser = async(req,res)=>{
    try {
      const {username,password}=req.body
      const bool=await model.getUserByUsername(username)
      if(bool.length ===0 || !bool){
        res.status(404).json({message:"User not found"})
        return;
      } 
      else {
        const userRow=bool[0];
        const passwordMatch= await bcrypt.compare(password,userRow.password);
        if(passwordMatch){
          res.status(200).send("you are logged")
      }
      else res.status(400).send("wrong password or username ")
    }}
    catch(err){
    res.status(500).send(err)
    }
  };


  const getAllProducts = async (req, res) => {
    try {
        const products = await model.getAllProducts();
        res.status(200).json(products);
    } catch (error) {
        console.error("Error retrieving products:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};


const postProduct = async (req, res) => {
    try {
        const { image, productname, description, category, date, delivery } = req.body;
        
        const formattedDate = new Date(date).toISOString().slice(0, 10);

        const newProduct = { image, productname, description, category, date: formattedDate, delivery };
        await model.postProduct(newProduct);
        res.status(201).json({ message: "Product created successfully" });
    } catch (error) {
        console.error("Error creating product:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};


const getProductsByCategory = async (req, res) => {
    try {
        const category = req.params.category;
        const products = await model.getProductsByCategory(category);
        res.status(200).json(products);
    } catch (error) {
        console.error("Error retrieving products by category:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

const getProductsByUserId = async (req, res) => {
    try {
        const userId = req.params.userId;
        const products = await model.getProductsByUserId(userId);
        res.status(200).json(products);
    } catch (error) {
        console.error("Error retrieving products by user ID:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

module.exports = { getUserByUsername, postUser,loginUser,getAllProducts,postProduct,getProductsByCategory,getProductsByUserId };
 