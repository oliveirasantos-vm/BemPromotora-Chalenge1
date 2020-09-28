const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(bodyparser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


const adminModule = require('./routes/adminRoute');
app.use('/admin', adminModule);

const researchModule = require('./routes/researchRoute');
app.use(researchModule);


app.listen(3000, () => { console.log("Listening on Port 3000...") });
