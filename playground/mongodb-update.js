//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        // Returning console log stops program if there is an error
        return console.log('Unable to connect to MongoDB server');
    }
    
    console.log('Connected to MongoDB Server!');
    
//    db.collection('Todos').findOneAndUpdate({
//        _id: new ObjectID('59c938d753b8e79b8ec36f38')
//    }, {
//        $set: {
//            completed: true
//        }
//    }, {
//        returnOriginal: false
//    }).then((result) => {
//        console.log(result);
//    });
    
    db.collection('Users').findOneAndUpdate({
        name: 'Ryan'
    }, {
        $set: {
            name: 'Robin'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    }, (err) => {
        console.log('Unable to update entry');
    });
    
    //db.close();
});