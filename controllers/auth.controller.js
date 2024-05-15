import bcrypt from "bcrypt";
import prisma from "../../backend/lib/prisma.js";

export const register = async (req, res) => {
  const { username, email, password } = req.body;
  // hash the password
  const hashedPassword = await bcrypt.hash(password, 10);
  // console.log(hashedPassword);
  // Create a new user 
  const newUser = await prisma.user.create(
  {
    data:{
      username,
      email,
      password:hashedPassword,
    }
  }
  );
  console.log(newUser);
}

export const login = (req, res) => {
    console.log("login endpoint");
    res.send("Login endpoint");
  };
  
  export const logout = (req, res) => {
    console.log("logout endpoint");
    res.send("Logout endpoint");
  };