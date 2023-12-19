import nodemailer from 'nodemailer'

export const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: "mavrodysymb@gmail.com",
        pass: "85675e56b"
    }
})

export const mailOptions = {
    from: 'SIGN.REG <' + "mavrodysymb@gmail.com" + '>',
    to: "pankratov.symbyanz@gmail.com",
}