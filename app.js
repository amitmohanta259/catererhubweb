const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
//Routes
const userRoutes = require('./routes/user'); 
const adminRoute = require('./routes/admin');

//Controller
const errorController = require('./controllers/error');
const port = 3000;

//for ejs
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'source')));
app.set('view engine','ejs');
app.set('views','views');
app.use(express.urlencoded())

//Middlewares
app.use(userRoutes);
app.use(adminRoute);
app.use(errorController.get404);

app.listen(port, () => console.log(`server started at port:${port}`));
