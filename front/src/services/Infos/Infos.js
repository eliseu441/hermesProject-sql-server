import API from '../Api.js'

class pageEdit {
    getTypes = async (params) => {

        try {
            const response = await API.get(`/getVolumeSites`, { params });

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




}

export default new pageEdit();