
import sendgrid from "@sendgrid/mail";
sendgrid.setApiKey(process.env.SENDGRID_APY_KEY);

export default async (req, res) => {
  require("dotenv").config();

  const body = req.body;

  const message = `
        Name: ${body.name}r\n
        Email: ${body.email}\r\n
        Message: ${body.message}
    `;

  const data = {
    to: "thomas.dgh@icloud.com",
    from: "thomas.dgh@icloud.com",
    subject: "[Website Name] Contact Form - New Message",
    text: message,
    html: message.replace(/\r\n/g, "<br>"),

  };


  sendgrid.send(data);

  return res.status(200).json({ status: "Ok" });
};
