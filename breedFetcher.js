const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    // logs error details on failure to GET info
    if (error) {
      callback(error, null);
      return;
    }
    // converts string received by request into array containing object
    const data = JSON.parse(body);
    // logs error details if invalid search returns empty array
    if (data.length === 0) {
      callback(error, null);
      return;
    }
    // if there are no errors logs value of description key in cat object
    callback(null, data[0].description);
  });
};

module.exports = { fetchBreedDescription };



