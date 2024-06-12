const mongoose = require('mongoose');

const AnimeSchema = mongoose.Schema({
    nombre:{
        type: String,
        required: true
    },
    capituloActual:{
        type: String,
        required: true
    },
    link:{
        type: String,
        required: true
    },
    linkImg:{
        type: String,
        required: true
    },
    date:{
        type: String,
        require: true
    }

});


module.exports = mongoose.model('Anime', AnimeSchema);