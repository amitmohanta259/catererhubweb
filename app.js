const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
//Routes
const userRoutes = require('./routes/user'); 
const adminRoute = require('./routes/admin');

//Controller
const errorController = require('./controllers/error');
//const port = 3000;
const PORT = process.env.PORT || 3000;
//for ejs
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'source')));
app.set('view engine','ejs');
app.set('views','views');
//app.use(express.urlencoded())
app.use(express.urlencoded({ extended: false }));

//Middlewares
app.use(userRoutes);
app.use(adminRoute);
app.use(errorController.get404);

app.listen(PORT, () => console.log(`server started at port ${port}`));
