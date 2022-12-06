const {} = require('express')


const usuariosGet = (req, res) =>  {


    res.json({
        msg:'get API'
    })
}

 

const userPost = (req, res) => {

    const body = req.body;

    res.json({
        msg:'post API', body
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