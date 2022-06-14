const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/todos')

const db = mongoose.connect(process.env.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, () => { console.log('Connected to Database')})


module.exports = db