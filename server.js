require("dotenv").config();
const express = require('express');
const app = express();

const PORT = 3000;

// middleware
const mongoose = require('mongoose');
const mongoURI = process.env.MONGO_URI;
const methodOverride = require('method-override');

app.set ('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.urlencoded({ extended:true }));
app.use(methodOverride("_method"));
app.use(express.static('public'));

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true});

//Controller
const toDosController = require('./controllers/todos.js');
//the default route:
app.use('/', toDosController);


// listen
app.listen(PORT, () => {
    console.log('listening on: ' + PORT);
});

mongoose.connection.once('open', () => {
    console.log("connected to mongo");
})