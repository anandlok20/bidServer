const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://anandlok:Punita@2@cluster0-oao9h.mongodb.net/BidServer?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: true
})

// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://anandlok:Punita@2@cluster0-oao9h.mongodb.net/BidServer?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//     const collection = client.db("BidServer").collection("devices");
//     // perform actions on the collection object
//     client.close();
// });