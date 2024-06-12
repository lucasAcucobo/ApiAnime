const { response, request } = require("express");
const { get } = require("mongoose");
const Anime = require("../models/Anime");

exports.obtenerAnimes = async(req, res ) => {
    console.log("obtener animeS");
    try {
        const anime = await Anime.find();
        res.json(anime);
    } catch (error) {
        console.log("Este es un error ", error);
        res.status(500).send('ha ocurrido un error');
    }
}

exports.obtenerAnime = async(req, res ) => {
    try {
        let anime = await Anime.findById(req.params.id);
        if (!anime) {
            res.status(404).json({
                msg :'No existe anime para el ID: '+ req.params.id
            });
        }
        res.json(anime);
    } catch (error) {
        console.log("Este es un error ", error);
        res.status(500).send('ha ocurrido un error');
    }
}

exports.crearAnime = async(req, res) =>{
    console.log("Crear anime");
    try {
        let anime ;
        anime = new Anime(req.body);
        await anime.save();
        res.status(200).send(anime);
    } catch (error) {
        console.log("Este es un error ", error);
        res.status(500).send('ha ocurrido un error');
    }
}

exports.actualizarAnime = async(req,res)=>{
    console.log("Actualizar");
    try {
        const {nombre,capituloActual,link,linkImg,date} = req.body;
        let anime = await Anime.findById(req.params.id);
        if (!anime) {
            res.status(404).json({
                msg :'No existe anime para el ID: '+ req.params.id
            });
        }
        anime.nombre = nombre;
        anime.linkImg = linkImg;
        anime.capituloActual = capituloActual;
        anime.link = link;
        anime.date = date;
        console.log(anime);
        anime = await Anime.findOneAndUpdate({
            _id : req.params.id
        }, anime, {
            new : true
        } );
        res.json(anime);   
    } catch (error) {
        console.log("Este es un error ", error);
        res.status(500).send('ha ocurrido un error');
    }
}

exports.eliminarAnime = async(req, res) =>{
    console.log("Elominar");
    try {
        let anime = await Anime.findById(req.params.id);
        if (!anime) {
            res.status(404).json({
                msg :'No existe anime para el ID: '+ req.params.id
            });  
        }
        await Anime.findOneAndRemove({
            _id : req.params.id
        });
        res.json({
            msg : 'Anime Eliminado Correctamente',
            id:req.params.id
        });
    } catch (error) {
        console.log("Este es un error ", error);
        res.status(500).send('ha ocurrido un error');
    }
}


