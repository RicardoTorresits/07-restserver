
const {Schema, model } = require('mongoose');

const UserSchemma = Schema({
    name:{
        type:String,
        required:[true, 'el nombres es obligatorio']
    },
    email:{
        type:String,
        required:[true, 'el correo es obligatorio'],
        unique:true
    },
    password:{
        type:String,
        required:[true,'la constraseña es obligatoria']
    },
    img:{
        tyep:String
    },
    rol:{
        type:String,
        requires:true,
        enum:['ADMIN_ROLE','USER_ROLE']
    },
    state:{
        type:Boolean,
        default:true
    },
    google:{
        type:Boolean,
        default:false
    }
});

module.exports = model('User',UserSchemma)