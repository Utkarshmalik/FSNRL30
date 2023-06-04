const userModal = require("../Models/user.modal");
const jwt = require("jsonwebtoken");
const authConfig = require("../configs/auth.config");
const { userTypes } = require("../utils/constants");


const validateSignIn = async (req,res,next)=>{

      if(!req.body.userId){
        return res.status(400).send({message:"Failed! userId is not present"});
    }

     if(!req.body.password){
        return res.status(400).send({message:"Failed! password is not present"});
    }

    next();
}


const validateSignUp = async (req,res,next)=>{

  if(!req.body.name){
        return res.status(400).send({message:"Failed! name is not present"});
    }

  if(!req.body.userId){
        return res.status(400).send({message:"Failed! userId is not present"});
    }

    if(!req.body.email){
        return res.status(400).send({message:"Failed! email is not present"});
    }

      if(!req.body.password){
        return res.status(400).send({message:"Failed! password is not present"});
    }

    var users =  await userModal.find({
        $or: [
            { userId: req.body.userId },
            { email: req.body.email }
        ] 
     });


     if(users && users.length){
      return res.status(400).send({message:"User already exists"});  
     }

     next();
}

const verifyJWT= async (req,res,next)=>{

    let token = req.headers['access-token'];

    if(!token){
        return res.status(403).send({message:"No Token provided"});
    }

    jwt.verify(token, authConfig.SECRET, (err,payload)=>{

        if(err){
            return res.status(403).send({message:"Invalid JWT token passed"});
        }

        const userId = payload.id;
        req.userId = userId;

        next();

    })
}

const verifyAdmin = async (req,res,next)=>{

    const user = await userModal.findOne({userId:req.userId});

    if(user && user.userType===userTypes.ADMIN){
        next();
    }else{
        return res.status(403).send({message:"Only Admin users are allowed to access this route"});
    }
}


module.exports={
    validateSignUp,
    validateSignIn,
    verifyJWT,
    verifyAdmin
}