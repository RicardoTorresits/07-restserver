
const { Router } = require('express');
const { check } = require('express-validator');
const { usuariosGet, userPost, userPut } = require('../controllers/user.controller');
const { validarCampos } = require('../middlewares/validar-campos');

 const router = Router()


router.get('/', usuariosGet);

router.put('/:id', userPut);

router.post('/',[
  check('name','el nombre es obligatorio').not().isEmpty(),
  check('password','el password debe de ser mas de 6 letras').isLength({min:6}),
  check('email','ingresa un coreo valido').isEmail(),
  //check('rol','no es un rol valido').isIn(['ADIMN_ROLE','USER_ROLE']),
  
  validarCampos()
] ,userPost)

router.delete('/', (req, res) =>  {
    res.json({
        msg:'delete API'
    })
  });






module.exports=router;