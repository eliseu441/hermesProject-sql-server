const express = require('express');

module.exports = (app) => {
    const router = express.Router();

    //------------------------------------------------------------------------------------------
    //              ROTAS DE PAGINA UPLOAD
    //------------------------------------------------------------------------------------------


    router.get('/getVolumeSites', function (req,res,next) {
 
        app.root.models.ArtGallery.getVolumeSites(req.query)
        .then(result => res.status(result.status ? result.status : 200).json(result))
        .catch(err => next(err))

    });
    router.get('/getAllArts', function (req,res,next) {
 
        app.root.models.ArtGallery.getAllArts(req.query)
        .then(result => res.status(result.status ? result.status : 200).json(result))
        .catch(err => next(err))

    });
    router.get('/getPaintersCombo', function (req,res,next) {
 
        app.root.models.ArtGallery.getPaintersCombo(req.query)
        .then(result => res.status(result.status ? result.status : 200).json(result))
        .catch(err => next(err))

    });
    router.get('/getSculpCarousel', function (req,res,next) {
 
        app.root.models.ArtGallery.getSculpCarousel(req.query)
        .then(result => res.status(result.status ? result.status : 200).json(result))
        .catch(err => next(err))

    });
    router.get('/getSculptorsCombo', function (req,res,next) {
 
        app.root.models.ArtGallery.getSculptorsCombo(req.query)
        .then(result => res.status(result.status ? result.status : 200).json(result))
        .catch(err => next(err))

    });
    router.get('/', function (req,res,next) {
 
        app.root.models.ArtGallery.getBuildTable(req.query)
        .then(result => res.status(result.status ? result.status : 200).json(result))
        .catch(err => next(err))

    });
    router.get('/getBuildContent', function (req,res,next) {
 
        app.root.models.ArtGallery.getBuildContent(req.query)
        .then(result => res.status(result.status ? result.status : 200).json(result))
        .catch(err => next(err))

    });
    return router;
};