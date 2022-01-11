const express = require('express')
// Using Node.js `require()`
const mongoose = require('mongoose');
const config = require('./config/dev')

mongoose.connect(config.DB_URI);

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