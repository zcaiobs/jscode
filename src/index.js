const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

require('./app/controllers/index')(app);

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))