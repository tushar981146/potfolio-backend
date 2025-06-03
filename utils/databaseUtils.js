const mongo = require('mongodb');

const mongoClint = mongo.MongoClient;

const mongoURL =  process.env.MONGO_URL;

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