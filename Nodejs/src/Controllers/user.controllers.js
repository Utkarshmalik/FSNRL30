const userModal = require("../Models/user.modal")



exports.getAllUsers=async (req,res)=>{

    try{
       const users= await userModal.find({});
        return res.status(200).send(users);
    }
    catch(e){
        return res.status(500).send({message:e.message || "Internal Server Error"})
    }

}

exports.getUserById=async (req,res)=>{

     try{
       const users= await userModal.findOne({userId:req.params.id});
        return res.status(200).send(users);
    }
    catch(e){
        return res.status(500).send({message:e.message || "Internal Server Error"})
    }
}


exports.updateUserById=async (req,res)=>{

 try{
       const savedUser = await userModal.findOne({userId:req.params.id});

       if(req.body.status){
        savedUser.userStatus = req.body.status
       }

       const updatedUser = await savedUser.save();

        return res.status(200).send(updatedUser);
    }
    catch(e){
        return res.status(500).send({message:e.message || "Internal Server Error"})
    }
    
}


exports.deleteUserById=(req,res)=>{
    
}