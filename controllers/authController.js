import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import userModel from "../models/userModel.js";
import JWT from "jsonwebtoken";
import dotenv from 'dotenv';
// const {JWT}=pkg;

dotenv.config();


export const registerController = async(req,res)=>{
    try {
        const {name,email,password,phone,address,answer}=req.body;
        if(!name){
            return res.send({message:'Name is required'});
        }
        if(!email){
            return res.send({message:'Email is required'});
        }if(!password){
            return res.send({message:'Password is required'});
        }if(!phone){
            return res.send({message:'Phone Number is required'});
        }if(!address){
            return res.send({message:'Address is required'});
        }
        if(!answer){
            return res.send({message:'Answer is required'});
        }

        //check user
        const existinguser=await userModel.findOne({email})
        //existing user
        if(existinguser){
            return res.status(200).send({
                success:true,
                message:'Already Registered please login'
            })
        }

        const hashedPassword=await hashPassword(password)
        //save
        const user = await new userModel(
            {
            name,
            email, 
            phone,
            address,
            password:hashedPassword,
            answer
            }).save();

        res.status(201).send({
            success:true,
            message:"User Registerd Successfully",
            user
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:'error in registering',
            error
        })
    }
};

export const loginController= async (req,res)=>{
try {
    const {email,password} = req.body;
    if(!email || !password){
        res.status(404).send({
            success:false,
            message:'Invalid email or password'
        })
    }
    const user=await userModel.findOne({email})
    if(!user)
    {
        return res.status(404).send({
            success:false,
            message:'Email not registered'
        })
    }
    const match=await comparePassword(password,user.password)
    if(!match){
        res.status(200).send({
            success:false,
            message:'Invalid Password'
        })
    }
    //token
    const token =await JWT.sign({_id:user._id},process.env.JWT_SECRET,{expiresIn:'7d'});
    res.status(200).send({
        success:true,
        message:'login successful',
        user:{
            name:user.name,
            email:user.email,
            phone:user.phone,
            address:user.address,
            role:user.role
        },
        token,
    });
    
} catch (error) {
    console.log(error);
    res.status(500).send({
        success:false,
        message:'error in login',
        error
    })
}
}

//test COntroller

export const testController = async(req,res)=>{
    
    try {
        res.send('Protected Route');
    } catch (error) {
        console.log(error);
        res.send({error});
        }
    
}

//forgot password controller

export const forgotPasswordController = async(req,res)=>{
    try {
        const {email,answer,newPassword}=req.body;
        if(!email){
            res.status(400).send('Email is required');
        }
        if(!answer){
            res.status(400).send('Question is required');
        }if(!newPassword){
            res.status(400).send('newPassword is required');
        }

        const user =await userModel.findOne({email,answer});
        
        if(!user){
            res.status(400).send({
                success:false,
                message:'Wrong Email or Answer'
            })
        }
        const hashed=await hashPassword(newPassword);
        await userModel.findByIdAndUpdate(user._id,{password:hashed});
        res.status(200).send({
            success:true,
            message:'Password Reset Successfully'
        })
    } catch (error) {
        console.log(error);
    res.status(500).send({
        success:false,
        message:'Something Went Wrong',
        error
    })
    }
}