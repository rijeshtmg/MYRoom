import * as config from "../config.js"
import jwt from 'jsonwebtoken';
import {hashPassword, comparePassword} from '../helpers/auth.js';
import User from '../models/user.js';
import { nanoid } from "nanoid";
import validator from 'email-validator';

const tokenAndUserResponse = (req,res,user) =>{
    const token = jwt.sign({ _id: user._id}, config.JWT_SECRET,{
        expiresIn: '1h',
    });

    const refreshToken = jwt.sign({ _id: user._id}, config.JWT_SECRET,{
        expiresIn: '7d',
    });

    user.password= undefined;
    user.resetCode = undefined;
    return res.json({
        token,
        refreshToken,
        user,
    });
};

export const welcome = (req, res)=>{
    res.json({
        data: "hello from nodejs api.",
    });
};

export const preRegister = async (req, res) => {
    // create json web token with email and password then email as clickable link
    // only when user click on that email link, registeration completes 
    const cors = (req, res, next) => {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Headers', '*');
      res.setHeader('Access-Control-Allow-Methods', '*');
      next();
    };
    if (req.method === 'OPTIONS') {
      // handle preflight request
      res.status(200).end();
    } else if (req.method === 'POST') {
      // handle post request
    try{

        console.log(req.body);
        // const emailSent = true;

        const {email,password} = req.body;
       
     

        if (!validator.validate(email)){
            return res.json({error: " A valid email is required"});
        }
        if (!password){
          return res.json({ error: "Password is required" });
        }
        if (password && password?.length <6){
          return res.json({ error: "Password should be at least 8 characters" });
        }
        const user = await User.findOne({email});
        
        if(user){
          return res.json({ error: "Email is taken" });
        }
        const token = jwt.sign({email,password}, config.JWT_SECRET,{
          expiresIn: "1h",
      });
      console.log(token);
    }
    catch(err){
        console.log(err)
        return res.json({ error: "Something went wrong. Try again" });
    }
 
    } 
};

export const register = async (req, res)=>{
    try {
        console.log(req.body);
        const {email, password} = jwt.verify(req.body.token, config.JWT_SECRET);

        const userexist = await User.findOne({email});
        if(userexist){
            return res.json({error: "Email is taken"})
        }

        const hashedPassword = await hashPassword(password);
        const user = await new User({
            username: nanoid(8),
            email, 
            password: hashedPassword,
        }).save();

       tokenAndUserResponse(req, res,user);

    }
    catch(err){
        console.log(err);
        return res.json({ error: "Something went wrong. Try again."})
    }
};



// Login User Controller
export const login = async (req, res)=>{
    try{
        const {email, password} = req.body;
        //steps

        //find user by email
        const user = await User.findOne({email});
        if (!user){
            return res.json ({error: "Could not find the user with provided email"});
        }
        // match Password
        const match = await comparePassword(password, user.password);
        if(!match){
            return res.json({error: 'Wrong password. Please try again'});
        }
        tokenAndUserResponse(req, res,user);
    }
    catch(err){
        return res.json({ error: "Something went wrong. Try again."})
    }
}

//forgot password controller
export const forgotPassword = async (req, res) =>{
    try{
        const { email } = req.body;
        
        const user = await User.findOne({email});
        if (!user){
            return res.json ({error: "Could not find the user with provided email"});
        }
        else{
            const resetCode = nanoid();
            user.resetCode = resetCode;
            user.save();
            const token = jwt.sign({resetCode}, config.JWT_SECRET,{expiresIn: '1hr'});
            console.log("Account found rrecover your account: "+ token);
            return res.json ({message: "Email found"});
        }
    }
    catch (err){
        console.log(err);
        return res.json({ error: "Something went wrong. Try again."})
    }
}

// Acccess account controllers
export const accessAccount = async (req, res) => {
    try {
      // verify token and check expiry
      const { resetCode } = jwt.verify(req.body.resetCode, config.JWT_SECRET);
  
      const user = await User.findOneAndUpdate(
        { resetCode },
        { resetCode: "" }
      );
  
      console.log("user", user, resetCode);
      // return;
  
     tokenAndUserResponse(req, res,user);
    } catch (err) {
      console.log(err);
      res.json({ error: "Expired or invalid token. Try again." });
    }
  };

// refreshToken Controller
// controllers
export const refreshToken = async (req, res) => {
    try {
      // console.log("you hit refresh token endpoint => ", req.headers);
  
      const { _id } = jwt.verify(req.headers.refresh_token, config.JWT_SECRET);
  
      const user = await User.findById(_id);
     tokenAndUserResponse(req, res,user);
    } catch (err) {
      console.log("===> ", err.name);
      return res.status(403).json({ error: "Refresh token failed" }); // 403 is important
    }
  };

  // controllers/auth
export const currentUser = async (req, res) => {
    try {
      const user = await User.findById(req.user._id);
      user.password = undefined;
      user.resetCode = undefined;
      res.json(user);
    } catch (err) {
      console.log(err);
      return res.status(403).json({ error: "Unauthorized" });
    }
  };

// controllers/auth
export const publicProfile = async (req, res) => {
    try {
      const user = await User.findOne({username: req.params.username});
      user.password = undefined;
      user.resetCode = undefined;
      res.json(user);
    } catch (err) {
      console.log(err);
      return res.json({ error: "user not found" });
    }
  };

  // controllers/auth
export const updatePassword = async (req, res) => {
    try {
      const { password } = req.body;
  
      if (!password) {
        return res.json({ error: "Password is required" });
      }
  
      // check if password meets the requirement
      if (password && password?.length < 8) {
        return res.json({
          error: "Min 8 characters long password is required",
        });
      }
  
     const user = await User.findByIdAndUpdate(req.user._id, {
        password: await hashPassword(password),
      });
      res.json({ ok: "Password has been changed sucessfully" });
    } catch (err) {
      console.log(err);
      return res.status(403).json({ error: "Unauthorized" });
    }
};

  // controllers/auth
// name username company image phone about
export const updateProfile = async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate(req.user._id,req.body,
        { new: true }
      );
  
      user.password = undefined;
      user.resetCode = undefined;
      res.json(user);
    } catch (err) {
      console.log(err);
      if (err.codeName === "DuplicateKey") {
        return res.status(403).json({ error: "Username or email is taken" });
      } else {
        return res.status(403).json({ error: "Unauhorized" });
      }
    }
  };
