//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        // Returning console log stops program if there is an error
        return console.log('Unable to connect to MongoDB server');
    }
    
    console.log('Connected to MongoDB Server!');
    
//    db.collection('Todos').find({
//        _id: new ObjectID('59c92e3cc1e4032274000329')
//    }).toArray().then((docs) => {
//        console.log('Todos:');
//        console.log(JSON.stringify(docs, undefined, 2));
//    }, (err) => {
//        console.log('Unable to fetch todos', err);
//    });
    
//    db.collection('Todos').find().count().then((count) => {
//        console.log(`Todos count: ${count}`);
//    }, (err) => {
//        console.log('Unable to fetch todos', err);
//    });
    
    db.collection('Users').find({name: 'Robin'}).toArray().then((users) => {
        console.log('Users:');
        console.log(JSON.stringify(users, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch user', err);
    });
    
    //db.close();
});