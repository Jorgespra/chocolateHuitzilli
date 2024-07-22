const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
console.log(process.env.EMAIL_USER);

const app = express();
const port = process.env.PORT || 3500;

const corsOptions = {
    origin: 'https://jorgespra.github.io', 
    methods: 'GET,POST',
    allowedHeaders: 'Content-Type'
};


app.use(cors(corsOptions));
app.use(bodyParser.json());

app.post('/send-email', async (req, res) => {
    const { email, subject, text } = req.body;

   
    const transporter = nodemailer.createTransport({
        service: 'gmail', 
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const mailOptions = {
        from: email, 
        to: 'admin@chocolatesartesanalhuitzilli.com',
        subject: subject + `de ${email}`,
        text: text
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send('Correo enviado con éxito');
    } catch (error) {
        console.error('Error al enviar el correo:', error);
        res.status(500).send('Error al enviar el correo');
    }

});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
