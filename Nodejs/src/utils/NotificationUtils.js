const nodemailer = require("nodemailer");


const sendEmail=async function(emailIds, subject,text,html){

    let emailString ="";

    emailIds.forEach((email,i)=>{
        if(i!=0){
            emailString+=", ";
        }
        emailString+=email;
    })

    console.log(emailString);


  let transporter = nodemailer.createTransport({
    service:'gmail',
    auth: {
      user: "utkarshmalik06@gmail.com",
      pass: "hbtctbydurkzancq"
    },
  });

let info = await transporter.sendMail({
    from: "utkarshmalik06@gmail.com",
    to: emailString,
    subject,
    text,
    html
  });


  console.log("Message sent sucessfully : %s", info.messageId);

}


module.exports={
    sendEmail
}