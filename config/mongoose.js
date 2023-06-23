const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/Connect_Datas');

const db = mongoose.connection;

db.on('err', console.error.bind(console,'Error while connecting db'));

db.once('open',function(){
    console.log('Server connected to DataBase.');
});

module.exports = db;