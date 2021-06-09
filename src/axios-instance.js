const axios = require('axios');

const apiInstance = axios.create({
    baseURL: 'https://sabhiidentity.ngrok.io/',
});

const sabhiApiInstance = axios.create({
    baseURL: 'https://sabhiapi.ngrok.io/',
});

module.exports = {
    apiInstance,
    sabhiApiInstance,
}
