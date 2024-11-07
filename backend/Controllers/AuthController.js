const bcrypt = require("becrypt")
const userModel = require("../Models/Users")
const jwt = require("jsonwebtoken")

const signup = async(req,res)=>{
    try{
        const {name,email,password}=req.body
        const user = await UserModel.findOne({email})
        if (user){
            return res.status(409)
                    .json({message:"User already exists, kindly login",success:false})
            
        }
        const userModel = new UserModel({name,email,password})
        userModel.password = await bcrypt.hash(password,10)
        await userModel.save()
        res.status(201)
            .json({
                message:"Signup successfully",
                success:true
            })
        
    }catch(err){
        res.status(500)
        .json({
            message:"Internal server error",
            success:false
        })
    }
}
const login = async(req,res)=>{
    try{
        const {email,password}=req.body
        const user = await UserModel.findOne({email})
        const errorMesg = "Authentication failed, email or password is incorrect"
        if (!user){
            return res.status(403)
                    .json({message:errorMesg,success:false})
            
        }
        const isPassEqual = await bcrypt.compart(password,user.password)
        if(!isPassEqual){
            return res.status(403)
                    .json({message:errorMesg,success:false})
        }

        const jwtToken = jwt.sign(
            {email:user.email,_id:user._id },
            process.env.JWT.SECRET,
            {expiresIn:"24h"}
            
        )
        res.status(200)
            .json({
                message:"Login success",
                success:true,
                jwtToken,
                email,
                name:user.name
            })
        
    }catch(err){
        res.status(500)
        .json({
            message:"Internal server error",
            success:false
        })
    }
}

module.exports={
    signup,login
}