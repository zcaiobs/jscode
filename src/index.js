const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
//ON heroku
//const PORT = process.env.PORT || 5000 
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors({origin: 'http://127.0.0.1:5500'}));

require('./app/controllers/index')(app);
app.listen(3000);
//app.listen(PORT, () => console.log(`Listening on ${ PORT }`))


