import nodemailer from 'nodemailer';
import { configDotenv } from 'dotenv';
configDotenv();
export default defineEventHandler(async (event) => {
  const { to, subject, html } = await readBody(event);
  const authUser = process.env.VITE_EMAIL;
  const authPass = process.env.VITE_PASSWORD;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 465,
    secure: true,
    auth: {
      user: authUser,
      pass: authPass,
    },
    tls: {
      rejectUnauthorized: false,
      mainVersion: 'TLSv1.2',
    },
  });

  const mailOptions = {
    from: authUser,
    to: to,
    subject,
    html,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response('Email sent successfully', { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response(error, { status: 500 });
  }
});
