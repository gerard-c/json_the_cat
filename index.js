const { fetchBreedDescription } = require('./breedFetcher');
const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    // if requested URL invalid, return error details from request
    console.log(`Error fetch details: ${error}`);
    return;
  } else if (!desc) {
    // if entered cat breed is invalid, prompts user to do it properly
    console.log('Please enter a valid breed of cat');
    return;
  }
  // logs cat breed description if everything works fine
  console.log(desc);
});