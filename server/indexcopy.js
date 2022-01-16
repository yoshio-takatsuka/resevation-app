const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://taka:t4401130@cluster0.n3phz.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  console.log('db err')  
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
console.log('db ok')  
