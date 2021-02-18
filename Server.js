const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true })
.then(() => {
    console.log("Connection OK !")
}).catch(err => {
    console.log("Erreur !")
});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB established')
})

app.listen(port, () => {
    console.log(`Serveur démaré sur le port: ${port}`);
})