const mongoose =require('mongoose');

let Schema= mongoose.Schema

let ResidentSchema = new Schema({
    firstName:String,
    lastName:String,
    single:Boolean,
    pets:Array,
    phoneNumber:Number
})

module.exports=mongoose.model('residents',ResidentSchema)