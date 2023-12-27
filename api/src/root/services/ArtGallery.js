//----------const dbFIBRA = require('../bds/FIBRA');
const dbFIBRA = require('../../database/sqlserver');
const IntlBr = require('intl');
const excel = require('exceljs');


const ValidationError = require('../../errors/ValidationError');
class ArtGallery {

    constructor() {

    }
    async getVolumeSites(params) {
        try {
            const sql = await dbFIBRA.query(`
            SELECT  [ID]
            ,[TYPE]
            ,[TYPE_DESCRIPTION]
        FROM [ART_GALLERY].[dbo].[TBF_TYPES]
            `);
            console.log(sql)
            return sql
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}

module.exports = new ArtGallery();