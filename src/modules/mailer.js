const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');
const path = require('path');
require('dotenv').config();

let { host, port, user, pass } = require('../config/mail.json')
user = process.env.EMAIL;
pass = process.env.PASSWORD
const transport = nodemailer.createTransport({
    host,
    port,
    auth: { user, pass },
  });

  transport.use('compile', hbs({
    viewEngine: {
      defaultLayout: undefined,
      partialsDir: path.resolve('./src/resources/mail/')
    },
    viewPath: path.resolve('./src/resources/mail/'),
    extName: '.html',
  }));

module.exports = transport;