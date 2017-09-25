//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        // Returning console log stops program if there is an error
        return console.log('Unable to connect to MongoDB server');
    }
    
    console.log('Connected to MongoDB Server!');
    
    // deleteMany
//    db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
//        console.log(result);
//    }, (err) => {
//        console.log('Could not delete that entry');
//    });
    
    // deleteOne
//    db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
//        console.log(result);
//    }, (err) => {
//        console.log('Unable to delete that entry');
//    });
    
    // findOneAndDelete
//    db.collection('Todos').findOneAndDelete({text: 'Eat lunch'}).then((result) => {
//        console.log(result);
//    }, (err) => {
//        console.log('Unable to find and delete entry');
//    });
    
    db.collection('Users').deleteMany({name: 'Robin'}).then((result) => {
        console.log(result);
    }, (err) => {
        console.log('Unable to delete users');
    });
    
    db.collection('Users').findOneAndDelete({
        _id: new ObjectID('59c92f2023c6e9227dfac211')
    }).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    }, (err) => {
        console.log('Unable to delete that user');
    });
    
    //db.close();
});