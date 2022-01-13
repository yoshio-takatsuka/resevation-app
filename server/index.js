const express = require('express')
const mongoose = require('mongoose');
const config = require('./config/dev')
const FakeDb = require('./fake-db')
console.log('config.DB_URI=>' + config.DB_URI);


// const { MongoClient } = require('mongodb');
// const uri = "mongodb+srv://taka:<password>@cluster0.n3phz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });



mongoose.connect(config.DB_URI)
.then(
    () => {
        console.log('connect OK');
        const fakeDb = new FakeDb()
        fakeDb.seedDb()
    }
)
console.log('connect after')

//mongodb+srv://taka:<password>@cluster0.n3phz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
const app = express()

app.get('/products',function(req, res) {
    res.json({'sucsess': true})
})
// envで指定があればenvの値　なければ3001
const PORT = process.env.PORT || '3001'

app.listen(PORT,function() {
    console.log('I am running')
})