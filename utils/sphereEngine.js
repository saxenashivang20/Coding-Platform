const axios = require('axios');
const config = require('../config');

exports.executeCode = async (code) => {
  try {
    // Make a request to Sphere Engine API
    const response = await axios.post(config.sphereEngineEndpoint, { code });

    // Process and return the response
    // ...

    return response.data;
  } catch (error) {
    console.error('Error executing code:', error);
    throw error;
  }
};
