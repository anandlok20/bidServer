const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/BidServer', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: true
})