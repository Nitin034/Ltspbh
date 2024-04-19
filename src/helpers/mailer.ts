import nodemailer from 'nodemailer';
import bcryptjs from 'bcryptjs';
import User from '@/models/adminModel';


export const sendEmail = async({email, emailType, userId}:any) =>{
     try {

     const hashedToken = await bcryptjs.hash(userId.toString(), 10) 


      if(emailType === "VERIFY"){
       const updatedUser = await User.findByIdAndUpdate(userId,{
        $set:{
          verifyToken: hashedToken, verifyTokenEpiry: (Date.now() + 3600000) 
      }});

      } else if(emailType === "VERIFY"){
        await User.findByIdAndUpdate(userId,{
          $set: {
            forgotPasswordToken: hashedToken,  forgotPasswordTokenExpiry: (Date.now() + 3600000) 
          }})
      }

      var transport = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "c2a7e6e7a1204e",
          pass: "4a2eea3b2710dc"
        }
      });

          const mailOptions = {
            from: '12nitinbroo@gmail.com', // sender address
            to: email, // list of receivers
            subject: emailType == 'VERIFY' ? "Verify your email" : "Reset your password", // Subject line
            text: "Hello world?", // plain text body
            html: `<p>Click <a href="${process.env.DOMAIN}/verifyemail?token=${hashedToken}">here</a> to ${emailType === "VERIFY" ? "verify your email" : "reset your passwprd"} or copy and paste the link below in your browser.<br> ${process.env.DOMAIN}/verifyemail?token=${hashedToken}</p>`
          }

          const mailResponse = await transport.sendMail(mailOptions)
          return mailResponse

     } catch (error:any) {
        throw new Error(error.message)
        
     }
}