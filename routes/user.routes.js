
const { Router } = require('express');
const { check } = require('express-validator');
const { usuariosGet, userPost, userPut } = require('../controllers/user.controller');

 const router = Router()


router.get('/', usuariosGet);

router.put('/:id', userPut);

router.post('/',[
  check('email','ingresa un coreo valido').isEmail(),
] ,userPost)

router.delete('/', (req, res) =>  {
    res.json({
        msg:'delete API'
    })
  });






module.exports=router;