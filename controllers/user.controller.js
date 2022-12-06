const {response, request} = require('express')
const bcrypjs = require('bcryptjs')

const User = require('../models/usuario')
const usuario = require('../models/usuario')
const { validationResult } = require('express-validator')

const usuariosGet = (req, res) =>  {


    res.json({
        msg:'get API'
    })
}

 

const userPost = async(req, res= res) => {

    const error = validationResult(req);
    if(error.isEmpty()){
        return res.status(400).json(error)
    }

    const {name, email, password,rol} = req.body;
    const user = new User({name,email,password,rol});

    //verificar si el correo existe
    const emailExist = await User.findOne({email});
    if(emailExist){
        return res.status(400).json({
            msg: 'el correo ya esta registrado'
        })
    }

    // encriptar la contraseña
    const salt = bcrypjs.genSaltSync();
    user.password = bcrypjs.hashSync(password, salt)

    // guardar en la BD
    await user.save();

    res.json({
        msg:'post API',
        user
    })
}

const userPut = (req,res) => {

    const id = req.params.id;

    res.json({
        msg:'put API',
        id 
    })
}

module.exports={
    usuariosGet,
    userPost,
    userPut
}