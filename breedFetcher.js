const request = require('request');
const args = process.argv.slice(2);


request(`https://api.thecatapi.com/v1/breeds/search?q=${args[0]}`, (error, response, body) => {
  if (error) {
    console.error('Error: Request failed');
    return;
  }
  const data = JSON.parse(body);
  if (data.length === 0) {
    console.log('Error: Please input a valid breed of cat and try again');
    return;
  }
  console.log(data[0].description);
});

