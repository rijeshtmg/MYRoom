import * as config from "../config.js";
import jwt from 'jsonwebtoken';
import {emailTemplate} from '../helpers/email.js';
import {hashPassword, comparePassword} from '../helpers/auth.js';
import User from '../models/user.js';
import { nanoid } from "nanoid";
import validator from "email-validator"; 

export const welcome = (req, res)=>{
    res.json({
        data: "hello from node js api change sucessful"
    });
}



//pre resister controller

export const preRegister = async (req, res) => {
    // create json web token with email and password then email as clickable link
    // only when user click on that email link, registeration completes 
    try{
        //
        console.log(req.body);
        // const emailSent = true;

        if (!validator.validate(email)){
            return res.json({error: " A valid email is required"});
        }
        if (password){
            return res.json({error: "Password is required"});
        }
        if (password && password.length <6){
            return res.json({error: "Password should be at least 8 characters"});
        }
        const user = await User.findOne({email});
        if(user){
            return res.json({error: "Email is taken"})
        }

        const {email,password} = req.body;
        const token = jwt.sign({email,password}, config.JWT_SECRET,{
            expiresIn: "1h",
        });

        


        config.AWSSES.sendEmail(emailTemplate(email, `<p>Please click the link below to activate your account. </p>
        <a href="${config.CLIENT_URL}/auth/account-activate${token}"> Activate my account </a>
        <p> This activation will expire in 1hr from now.<p>`, config.REPLY_TO, 'Activate Your Account'),
        (err, data)=>{
            if(err) {
                console.log(err);
                return res.json({ok: false});
            }
            else{
                console.log(data);
                return res.json({ok: true});
            }
        });
        
    }
    catch(err){
        console.log(err)
        return res.json({error:"Something went wrong. Try again"});
    }
}


//register user controller

export const register = async (req, res)=>{
    try {
        console.log(req.body)
        const {email,password} = jwt.verify(req.body.token, config.JWT_SECRET);
        console.log(decoded);

        const hashedPassword = await hashPassword(password);
        const user = await new User({
            username: nanoid(),
            email, 
            password: hashedPassword,
        })
        user.save();

        const token = jwt.sign({ _id: user._id}, config.JWT_SECRET,{
            expiresIn: '1h'
        });

        const refreshToken = jwt.sign({ _id: user._id}, config.JWT_SECRET,{
            expiresIn: '7d'
        });

        user.password=undefined;
        user.resetCode = undefined;
        return res.jspn({
            token,
            refreshToken,
            user,
        })

    }
    catch(err){
        return res.json({ error: "Something went wrong. Try again."})
    }
};

// Login User Controller
export const login = async (rew, res)=>{
    try{
        const {email, password} = req.body;
        //steps

        //find user by email
        const user = await User.findOne({email});

        // match Password
        const match = await comparePassword(password, user.password);
        if(!match){
            return res.json({error: 'Wrong password. Please try again'});
        }
        const token = jwt.sign({ _id: user._id}, config.JWT_SECRET,{
            expiresIn: '1h'
        });

        const refreshToken = jwt.sign({ _id: user._id}, config.JWT_SECRET,{
            expiresIn: '7d'
        });

        user.password=undefined;
        user.resetCode = undefined;
        return res.json({
            token,
            refreshToken,
            user,
        })
    }
    catch(err){
        return res.json({ error: "Something went wrong. Try again."})
    }
}

// forgot password credentials 

export const forgotPassword = async (req, res) =>{
    try{
        const { email } = req.body;
        
        const user = await User.findOne({email});
        if (!user){
            return res.json ({error: "Could not find the email"});
        }
        else{
            const resetCode = nanoid();
            user.resetCode = resetCode;
            user.save();
            const token = jwt.sign({resetCode}, config.JWT_SECRET,{expiresIn: '1hr'});

            config.AWSSES.sendEmail(emailTemplate(email,`
            <p> Please click the lik below to accesss your account.</p>
            <a href="${config.CLIENT_URL}/auth/access-account/${token}"> Access my Account</a>`, config.REPLY_TO,'Password Reset'),
            (err, data)=>{
                if(err) {
                    console.log(err);
                    return res.json({ok: false});
                }
                else{
                    console.log(data);
                    return res.json({ok: true});
                }
            
            })
        }
    }
    catch (err){
        console.log(err);
        return res.json({ error: "Something went wrong. Try again."})
    }
}