const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb://onmistack:onmistack@onmistack-shard-00-00-1ggsd.mongodb.net:27017,onmistack-shard-00-01-1ggsd.mongodb.net:27017,onmistack-shard-00-02-1ggsd.mongodb.net:27017/semana?ssl=true&replicaSet=OnmiStack-shard-0&authSource=admin&retryWrites=true&w=majority&socketTimeoutMS=360000&connectTimeoutMS=360000', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json());
app.use(routes);

app.listen(3000);