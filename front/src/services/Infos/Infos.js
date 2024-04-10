import API from '../Api.js'

class pageEdit {
    getTypes = async (params) => {

        try {
            const response = await API.get(`/getTypesDesc`, { params });

            if (response.status === 200) {
                const data = response.data;

                return data;
            }

            return [];

        } catch (err) {
            throw err;
        }

    };

    getAllArts = async (params) => {

        try {
            const response = await API.get(`/getAllArts`, { params });

            if (response.status === 200) {
                const data = response.data;
                return data;
            }

            return [];

        } catch (err) {
            throw err;
        }

    };

    getPaintersCombo = async (params) => {

        try {
            const response = await API.get(`/getPaintersCombo`, { params });

            if (response.status === 200) {
                const data = response.data;
                return data;
            }

            return [];

        } catch (err) {
            throw err;
        }

    };
    getSculpCarousel = async (params) => {

        try {
            const response = await API.get(`/getSculpCarousel`, { params });

            if (response.status === 200) {
                const data = response.data;
                return data;
            }

            return [];

        } catch (err) {
            throw err;
        }

    };
    getSculptorsCombo = async (params) => {

        try {
            const response = await API.get(`/getSculptorsCombo`, { params });

            if (response.status === 200) {
                const data = response.data;
                return data;
            }

            return [];

        } catch (err) {
            throw err;
        }

    };
    getBuildTable = async (params) => {

        try {
            const response = await API.get(`/getBuildTable`, { params });

            if (response.status === 200) {
                const data = response.data;
                return data;
            }

            return [];

        } catch (err) {
            throw err;
        }

    };
    getBuildContent = async (params) => {

        try {
            const response = await API.get(`/getBuildContent`, { params });

            if (response.status === 200) {
                const data = response.data;
                return data;
            }

            return [];

        } catch (err) {
            throw err;
        }

    };
    getInventors = async (params) => {

        try {
            const response = await API.get(`/getInventors`, { params });

            if (response.status === 200) {
                const data = response.data;
                return data;
            }

            return [];

        } catch (err) {
            throw err;
        }

    };
    getEpochChoices = async (params) => {

        try {
            const response = await API.get(`/getEpochChoices`, { params });

            if (response.status === 200) {
                const data = response.data;
                return data;
            }

            return [];

        } catch (err) {
            throw err;
        }

    };
    getImagesCentury = async (params) => {

        try {
            const response = await API.get(`/getImagesCentury`, { params });

            if (response.status === 200) {
                const data = response.data;
                return data;
            }

            return [];

        } catch (err) {
            throw err;
        }

    };
    getBioArtists = async (params) => {

        try {
            const response = await API.get(`/getBioArtists`, { params });

            if (response.status === 200) {
                const data = response.data;
                return data;
            }

            return [];

        } catch (err) {
            throw err;
        }

    };
    getBioArtists2 = async (params) => {

        try {
            const response = await API.get(`/getBioArtists2`, { params });

            if (response.status === 200) {
                const data = response.data;
                return data;
            }

            return [];

        } catch (err) {
            throw err;
        }

    };
    getBCbuilds = async (params) => {

        try {
            const response = await API.get(`/getBCbuilds`, { params });

            if (response.status === 200) {
                const data = response.data;
                return data;
            }

            return [];

        } catch (err) {
            throw err;
        }

    };
    

}

export default new pageEdit();