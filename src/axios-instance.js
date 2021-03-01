const axios = require('axios');

const apiInstance = axios.create({
    // baseURL: 'https://sabhi-sdr-test-node.herokuapp.com/',
    baseURL: 'http://localhost:2011/',
});

const sabhiApiInstance = axios.create({
    baseURL: 'http://localhost:12345/',
});

module.exports = {
    apiInstance,
    sabhiApiInstance
}