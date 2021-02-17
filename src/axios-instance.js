const axios = require('axios');

const apiInstance = axios.create({
    baseURL: 'http://localhost:2010/',
});

module.exports = {
    apiInstance
}