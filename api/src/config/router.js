const express = require('express')

module.exports = app => {
    
    const protected = express.Router();
    
    app.config.passport.then(auth => {
        
        const app_path = process.env.app_path ? process.env.app_path : '';
        
        protected.use('', app.root.routes.ArtGallery);
        
        app.use(`${ app_path }/`, protected);
        app.use(`${ app_path }/getVolumeSites`, protected);
        app.use(`${ app_path }/getAllArts`, protected);
        app.use(`${ app_path }/getPaintersCombo`, protected);
        app.use(`${ app_path }/getSculpCarousel`, protected);
        app.use(`${ app_path }/getSculptorsCombo`, protected);
        app.use(`${ app_path }/getBuildContent`, protected);
        
        app.use((err, req, res, next) => {
            
            const { name, message, stack } = err;
            
            if (name === 'ValidationError')
            {
                res.status(400).json({ name, message, stack });
            }
            else 
            {
                res.status(500).json({ name, message, stack }); 
            }
            
            // app.get('apm').captureError(err, { 
            //     request  : req,
            //     response : res,
            //     custom   : { 
            //         ...req.query, 
            //         ...req.body, 
            //         ...req.params 
            //     }
            // });
            
            next(err);
        }); 
        
    });
}