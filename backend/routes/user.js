const express = require("express");
const zod = require("zod");
const { User } = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const router = express.Router();

const signupBody = zod.object({
    username: zod.string().email(),
	firstName: zod.string(),
	lastName: zod.string(),
	password: zod.string()
})

router.post("/signup",async(req,res)=>{
    const {success} = signupBody.safeParse(req.body);
    const existingUser = await User.findOne({
        email:req.body.email
    })

    if(!success){
        return res.json({
            message:"Wrong inputs"
        })
    }
    if(existingUser){ //add validation check
        return res.status(411).json({
            message:"Email already taken!"
        })
    }

    try{
        const user = await User.create(req.body)
        const token = jwt.sign(user, JWT_SECRET);

        localStorage.setItem("token",token);
        return res.json({
            token
        })
    }catch(err){
        return res.status(403).json({
            error:"Unable to create user"
        })
    }
})

const signinSchema = zod.object({
    username: zod.string().email(),
	password: zod.string()
})

router.post("/signin",async(req,res)=>{
    const {success} = signinSchema.safeParse(req.body)
    const user = await User.findOne({
        email:req.body.email,
        password:req.body.password
    });
    if(user){ //add validation check
        const token = jwt.sign(user,JWT_SECRET);
        return res.json({
            token
        })
    }else{
        return res.json({
            message:"user not found"
        })
    }

})

module.exports = router;