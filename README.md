# 200414 Mongo CRUD CW

[Resource - MDN Mongo Info](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose#Connecting_to_MongoDB) |
[Resource - Mongoose Methods](https://mongoosejs.com/docs/api/model.html)

### Your first name, last name, and single endpoints all go to the same place. Also you single endpoint doesn't need a query param because it's a boolean value and you only want true values. Also the delete mongoose method doesn't need to be passed that `req.body` param. But your schema, other endpoints, and most mongoose methods looks solid.

### Score : 3/5

### Schema
Define a Resident Schema with properties :
- first name (string)
- last name (string)
- pets(array)
- single(boolean)
- phone number (number)
### Using Mongoose
- Connect to your Mongo Database and set up error message in your entry point file using the code snippet below
```JavaScript
// CONNECTING TO A MONGO DATABASE
// reference the mongoose module 
let mongoose = require('mongoose');
// connect to database
let mongoDB = '[YOUR-CONNECTION-STRING]'
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});
// connection error message
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
```
### Requirements 
Each requirement must be an endpoint and each endpoint should be mounted to the `api` path
- Create a new resident
- Find multiple residents by last name
- Find single residents
- Find one resident by first name
- Display all residents
- Update a resident by phone number
- Delete a resident by phone number
