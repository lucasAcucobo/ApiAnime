const mongoose =require('mongoose');    
require('dotenv').config({
    path:'variables.env'
});

const conectarDB=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_DB, {
            useNewUrlParser: true 

        }).catch(e=>console.log(e));
        console.log("conectado a la BD");

    } catch (error) {
        console.log(error);
        process.exit(1);
    }

}

module.exports =conectarDB;
