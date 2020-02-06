require("dotenv").config();
const express = require("express");
const massive = require("massive");
const ctrl = require('./controller/products_controller')


const app = express();

app.use(express.json())

const { SERVER_PORT, CONNECTION_STRING } = process.env;

massive(CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
    console.log("connected to db");
  })
  .catch(err => console.log(err));

app.get('/api/products', ctrl.getAll);
app.get('/api/products/:id', ctrl.getOne);
app.put('/api/products/:id', ctrl.update);
app.post('/api/products', ctrl.createProduct);
app.delete('/api/products/:id', ctrl.delete);


app.listen(SERVER_PORT, () =>
  console.log(`You are on Server Port ${SERVER_PORT}`)
);
