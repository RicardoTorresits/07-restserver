const mongoose = require('mongoose')

 const dbConnection = async () => {

    try {
        await mongoose.connect(process.env.MONOGODB_ATLAS)
        console.log('base de datos online');
        mongoose.set('strictQuery',true)
    } catch (error) {
        console.log(error)
        throw new Error('Error a la hora de iniciar la base de datos')
    }

 }

 module.exports = {
    dbConnection
 }

