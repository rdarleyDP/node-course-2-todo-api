const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {User} = require('./../server/models/user');

//var id = '59ca6e3e82df911a26b0e65b11';
//
//if (!ObjectID.isValid(id)) {
//    console.log('ID not valid');
//}

//Todo.find({
//    _id: id
//}).then((todos) => {
//    console.log('Todos', todos);
//});
//
//Todo.findOne({
//    _id: id
//}).then((todo) => {
//    console.log('Todo', todo);
//});
//
//Todo.findById(id).then((todo) => {
//    if (!todo) {
//        return console.log('Id not found');
//    }
//    
//    console.log('Todo by id', todo);
//}).catch((e) => console.log(e));


var userId = '59c94e98ab808d90232e4d34';

User.findById(userId).then((user) => {
    if (!user) {
        return console.log('User not found');
    }
    
    console.log('User by id', user);
}).catch((e) => console.log(e));