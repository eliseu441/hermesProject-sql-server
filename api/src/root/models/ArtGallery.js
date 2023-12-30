

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
    async getAllArts(params) {
        try {
            
            const result = await this.app.root.services.ArtGallery.getAllArts(params)
            return result
        } catch (error) {
            throw error;
        }
    }
    async getPaintersCombo(params) {
        try {
            
            const result = await this.app.root.services.ArtGallery.getPaintersCombo(params)
            return result
        } catch (error) {
            throw error;
        }
    }
}

module.exports = (app) => new ArtGallery(app);

