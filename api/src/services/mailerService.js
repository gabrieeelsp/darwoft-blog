const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');

const templatePath = '../utils/emailTemplates';

const { GMAIL_EMAIL, GMAIL_PASSWORD, CLIENT_URL } = process.env;

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: GMAIL_EMAIL,
        pass: GMAIL_PASSWORD,
    },
});

transporter
    .verify()
    .then()
    .catch((error) => console.log(error));

const send = async ({ to, subject, message }) => {
    const info = await transporter.sendMail({
        from: `"CYT Notificaciones" <${GMAIL_EMAIL}>`, // sender address
        to, // list of receivers
        subject, // Subject line
        html: message, // html body
    });

    return info;
};

const createMessage = (template, args = {}) => {
    let emailTemplatePath = path.resolve(__dirname, templatePath);

    let templateFile;
    switch (template) {
        case 'emailValidation':
            templateFile = 'EmailValidationTemplate.html';
            break;

        case 'changePassword':
            templateFile = 'ChangePasswordTemplate.html';
            break;

        default:
            break;
    }

    emailTemplatePath = path.join(emailTemplatePath, templateFile);

    let emailTemplate = fs.readFileSync(emailTemplatePath, 'utf8');
    emailTemplate = emailTemplate.replace(`{client-url}`, CLIENT_URL);
    Object.keys(args).forEach((arg) => {
        emailTemplate = emailTemplate.replace(`{${arg}}`, args[arg]);
    });

    return emailTemplate;
};

module.exports = {
    send,
    createMessage,
};
