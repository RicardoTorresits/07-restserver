
 const { Router } = require('express');
const { usuariosGet, userPost, userPut } = require('../controllers/user.controller');

 const router = Router()


router.get('/', usuariosGet);

router.put('/:id', userPut);

router.post('/',userPost)

router.delete('/', (req, res) =>  {
    res.json({
        msg:'delete API'
    })
  });






module.exports=router;