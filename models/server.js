const express = require('express')
const cors = require('cors');
const { dbConnection } = require('../database/config.db');

class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT
        
        //contectar a base de datos
        this.concectarDB();
        //Middlewares
        this.middlewares();
        //rutas de mis aplicacion
        this.routes();
    }

    async concectarDB() {
        await dbConnection()
    }

    middlewares(){

        //cors
        this.app.use(cors())

        // lectura y parse del bofy
        this.app.use(express.json())

        // directoria publico
        this.app.use(express.static('public'));

    }

    routes () {
        this.app.use('/api/user', require('../routes/user.routes'))
    }

    listen(){
        this.app.listen(process.env.PORT,() => {
            console.log('servidor corriendo en pueto',this.port)
        })
    }

}




module.exports = Server;
