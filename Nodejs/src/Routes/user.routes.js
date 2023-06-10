const { getAllUsers, getUserById, updateUserById, deleteUserById } = require("../Controllers/user.controllers")
const { verifyJWT, verifyAdmin, verifyAdminOrSelf } = require("../Middlewares/auth.middlewares")



module.exports=function(app){

    app.get("/cs/api/v1/users",[verifyJWT, verifyAdmin],getAllUsers)
    app.get("/cs/api/v1/users/:id",[verifyJWT, verifyAdminOrSelf],getUserById)
    app.put("/cs/api/v1/users/:id",[verifyJWT, verifyAdminOrSelf],updateUserById)
    app.delete("/cs/api/v1/users/:id",[verifyJWT, verifyAdminOrSelf],deleteUserById)

}