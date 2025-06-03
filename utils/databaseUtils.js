const mongo = require('mongodb');

const mongoClint = mongo.MongoClient;

const mongoURL =  "mongodb+srv://tushar9811:tushar1234@cluster0.af5ogrx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

let _db;

const mongoConnect = (callback) => {

    
    mongoClint.connect(mongoURL).then((client) => {
        
        _db = client.db('airbnb');
        console.log(_db);
        callback();                 
    }).catch(err => {
        console.log(err);
        throw err;
    });
};




const getDB = () => {

    if(!_db) {
        throw new Error('Mongo not connected');
        
    }

    return _db;
}

module.exports = {
    mongoConnect,
    getDB
};