const express = require('express');
const mongoose = require('mongoose').set('debug', true);
const bodyParser = require('body-parser');
const routes = require('./routes/routes')
const cors = require('cors');

//database connection
const mongoDB = "mongodb+srv://britof:PASSWORD@cluster0-oimg3.mongodb.net/<dbname>?retryWrites=true&w=majority";
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => {
            console.log("Successfully connected to MongoDB"); 
        })
        .catch(err => {
            console.error("Connection error!!!", err);
            process.exit;
        });
const db = mongoose.connection;
db.on('error', console.error.bind("Database connection error!!! "));

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(routes);

app.listen(3030, () => {
    console.log("Server is on port 3030! ");
});
