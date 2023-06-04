const { registerUser, loginUser } = require("../Controllers/auth.controllers");
const { validateSignUp, validateSignIn } = require("../Middlewares/auth.middlewares");

module.exports= (app)=>{

    app.post("/auth/signup",[validateSignUp] ,registerUser);
    app.post("/auth/signIn",[validateSignIn] ,loginUser);

}