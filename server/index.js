const express = require('express')
const mongoose = require('mongoose');
const config = require('./config/index') // indeの場合は不要 No118
const FakeDb = require('./fake-db')
console.log('config.DB_URI=>' + config.DB_URI);

const productRoutes = require('./route/products')

const path = require('path')  //No116

console.log('process.env.NODE_ENV :>' + process.env.NODE_ENV )
console.log('config.DB_URI :>' + config.DB_URI )

mongoose.connect(config.DB_URI)
.then(
    () => {
        console.log('connect OK');
        if (process.env.NODE_ENV !== 'production') {  // 本番の時は消さない
            const fakeDb = new FakeDb()
            // fakeDb.initDb()
        }
    }
)
console.log('connect after')

const app = express()

app.use('/api/v1/products',productRoutes)

if (process.env.NODE_ENV === 'production') {
    const appPath = path.join(__dirname,'..','dist','resevation-app')       // No116
    app.use(express.static(appPath))                       // no166
    app.get("*",function(req,res){                          // no166
        res.sendFile(path.resolve(appPath,'index.html'))     // no166
    })
}


// envで指定があればenvの値　なければ3001
console.log('process.env.PORT:>' + process.env.PORT)
const PORT = process.env.PORT || '3001'

app.listen(PORT,function() {
    console.log('I am running')
})