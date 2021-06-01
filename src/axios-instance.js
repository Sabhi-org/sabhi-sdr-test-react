const axios = require('axios');

const apiInstance = axios.create({
    // baseURL: 'https://sabhi-sdr-test-node.herokuapp.com/',
    // baseURL: 'http://localhost:2011/',
    baseURL: 'https://client-server-veramo.herokuapp.com/',
});

const sabhiApiInstance = axios.create({
    // baseURL: 'http://localhost:12345/',
    // baseURL: 'https://sabhi-task.com/',
    baseURL: 'https://sabhi-api.herokuapp.com/',
});

module.exports = {
    apiInstance,
    sabhiApiInstance
}