

const { map } = require('mssql');
const fs = require('fs');
const path = require('path');

class ArtGallery {
    constructor(app) {
        this.app = app;
    }
    async getVolumeSites(params) {
        try {
            
            const result = await this.app.root.services.ArtGallery.getVolumeSites(params)
            return result
        } catch (error) {
            throw error;
        }
    }
}

module.exports = (app) => new ArtGallery(app);

