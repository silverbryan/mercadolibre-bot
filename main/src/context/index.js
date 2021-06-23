require('dotenv').config();
const axios = require('axios');
const { sites } = require('../config');

module.exports = {
    formatMessage: ({ permalink }) => (
        `[Link] <a href="${permalink}">${permalink}</a>
        <a href="${permalink}">&#8205;</a>`
    ),

    formatPrice: (value, countryId, currencyId) => {
        try {
            formatter = new Intl.NumberFormat(`es-${countryId}`, {
                style: 'currency',
                currency: currencyId,
            })
            return formatter.format(value);
        } catch (err) {
            console.log(`MercadolibreXErr: Currency: ${err}`);
            return "";
        }
    },

    getItems: async (siteId, searchTerm) => {
        if (!searchTerm) return null;
        const response = await axios.get(`${process.env.PATH_URL}/sites/${siteId}/search?q=${searchTerm}`)
        return response.data.results;
    },

    getSite: () => sites[0],
}