var nodemailer = require('nodemailer');


//--- CAMBIA LOS VALORES DE ESTAS VARIABLES ----

var usuario = 'misuaurio@gmail.com',
    password = '1234',
    destinatario = 'destinatario@dominio.com'

// ---------------------------------------------


var smtpTransport = nodemailer.createTransport("SMTP",{
    service: "Gmail",
    auth: {
        user: usuario,
        pass: password
    }
});

var mailOptions = {

    from: 'Mon(1) CODEHERO <jonathan@codehero.co>',
    to: destinatario,
    subject: 'Alerta mon(1)',
    text: '¡Alerta! El proceso de Nginx se ha reiniciado. ' + new Date()
};

smtpTransport.sendMail(mailOptions, function(error, response){
    if(error) console.log('Error enviando mensaje: ' + error);
    else console.log('Mensaje enviado');
    process.exit();
})
