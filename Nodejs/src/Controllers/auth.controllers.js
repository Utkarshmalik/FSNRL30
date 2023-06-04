const userModal = require("../Models/user.modal");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const authConfig = require("../configs/auth.config");


const registerUser = async (req,res)=>{

    const newUser = new userModal({
            name:req.body.name,
            email:req.body.email,
            userId:req.body.userId,
            password:bcrypt.hashSync(req.body.password,10),
            userType:req.body.userType
        })

    const savedUser = await newUser.save();

    res.status(201).send(savedUser);
 
}

const loginUser = async (req,res)=>{

    const user  = await userModal.findOne({userId:req.body.userId});

    if(user===null){
        return res.status(400).send({message:"USerId passed is invalid"})
    }

    const isValidPassword = bcrypt.compareSync(req.body.password, user.password);

    if(!isValidPassword){
        return res.status(400).send({message:" Password passed is invalid"})
    }

    var token = jwt.sign({id:user.userId},authConfig.SECRET,{expiresIn:60});

    res.send({
        name:user.name,
        useId:user.userId,
        email:user.email,
        userType:user.userType,
        accessToken:token
    });
     
}

module.exports={
    registerUser, loginUser
}

