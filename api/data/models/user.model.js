var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = new Schema({
    username:{
        type: String,
        unique: true,
        required: true
    },
    name:{
        type: String
    },
    email:{
        type:String
    },
    password:{
        type: String,
        required: true
    }
});
mongoose.model('User', userSchema);