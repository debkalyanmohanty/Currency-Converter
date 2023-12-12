require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const MONGOURI = process.env.MONGO_URL;
const port = process.env.PORT;
const getCrypoRoutes = require('./routes/storeCryptocurrencies');
const convertCryptoRoutes = require('./routes/convertRoutes');
const scheduler = require('./schedulers/scheduler');
const cors = require('cors');

const server = require("http").createServer(app);
app.use(cors());

app.use(express.json({ extended: false }));

mongoose.connect(MONGOURI);

mongoose.connection.on("connected", async () => {
    console.log("connected to mongo ");
  });
mongoose.connection.on("error", async (err) => {
    console.log("error connecting", err);
  });

//Routes

app.use('/api', getCrypoRoutes);
app.use('/api', convertCryptoRoutes);


scheduler();

server.listen(port, () => {
 console.log(`Server started on port ${port}!`);
});

