// "use server"
// // import nodemailer from 'nodemailer';

// import { Resend } from "resend"
// const resend = new Resend(process.env.RESEND_API_KEY)

// export const sendEmail = async(formData:FormData)=>{
//     console.log("Running on server");
//     console.log(formData.get("sendEmail"));
//     console.log(formData.get("message"));
// const subject = formData.get("subject")
// const message = formData.get("message")
// const email = formData.get("email")
//     await resend.emails.send({
//         from:"onboarding@resend.dev",
//         to:"emailUser.com",
//         reply_to:"mail",
//         subject:subject as string,
//         text:message as string,

//     })
// }