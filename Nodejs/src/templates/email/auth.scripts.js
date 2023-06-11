

const userLogin = (user)=>{

    return {
        subject:"Logged in to CS APP",
        html: `
        <div>
        <h3> Hello ${user.name} , </h3>
        <br/>
        <br/>

        You have successfully logged in to CS app with userId: ${user.userId} and role ${user.userType}
        <br/>


        Thanks & Regards 
        CS Core Leadership team
        <br/>
        <br/>
       <br/>

        <img height="100" width="100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7vmiUgFbbLpKTfMCZrJK6Wm-Lef6MrPFVrL0hR0PttuMWmau8vYU20eTtvQDgPno5zwg&usqp=CAU" />
        </div>
        `,
        text:null
    }

}


module.exports={
    userLogin
}