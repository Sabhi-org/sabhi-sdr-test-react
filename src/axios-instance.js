const axios = require('axios');

const apiInstance = axios.create({
    // baseURL: 'https://sabhi-sdr-test-node.herokuapp.com/',
    baseURL: 'http://localhost:2011/',
});

module.exports = {
    apiInstance,
}