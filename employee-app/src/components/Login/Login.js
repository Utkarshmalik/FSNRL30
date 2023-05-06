import "./Login.css";


const Name = "Utkarsh";


function Login(){

    return (
        <div className="login" >
            <form className="login-form">
                <div>
                <label> UserName: </label>
                <input type="text" placeholder="UserName"/>
                </div>
                <div>
                <label> Password: </label>
                <input type="password" placeholder="Password"/>
                </div>
                <input type="button" value="signIn" />
            </form>
        </div>
    )

}

export default Login;