const nodemailer= require("nodemailer")

const sendEmail = async options =>{
    const transport = nodemailer.createTransport({
        host: "smtp.office365.com",
        port: 2525,
        auth: {
          user: "tucorreomcrosoft",
          pass: "tucontrasenaaplicacion"
        }
      });
    const mensaje={
        from: "VetyShop Store <tucorreomicrosoft>",
        to: options.email,
        subject: options.subject,
        text: options.mensaje
    }

    await transport.sendMail(mensaje)
}

module.exports= sendEmail;