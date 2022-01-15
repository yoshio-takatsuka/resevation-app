const express = require('express')
const mongoose = require('mongoose');
const config = require('./config/dev')
const FakeDb = require('./fake-db')
console.log('config.DB_URI=>' + config.DB_URI);

const productRoutes = require('./route/products')
mongoose.connect(config.DB_URI)
.then(
    () => {
        console.log('connect OK');
        const fakeDb = new FakeDb()
        fakeDb.initDb()
    }
)
console.log('connect after')

const app = express()

app.use('/ap1/v1/products',productRoutes)


// envで指定があればenvの値　なければ3001
const PORT = process.env.PORT || '3001'

app.listen(PORT,function() {
    console.log('I am running')
})