const request = require('request');

request ('https://api.thecatapi.com/v1/images/search?q=sib', (error, response, body) => {
  console.log(body);
  console.log(typeof body);
});