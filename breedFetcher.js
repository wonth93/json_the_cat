const request = require('request');
const theBreed = process.argv[2];

const breedFetcher = function(breed, message) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
    if (error !== null) {
      return console.log(error);
    }
    return message(body);
  });
};

const pullOutMsg = function(cat) {
  const data = JSON.parse(cat);
  if (data.length === 0) {
    return console.log('Breed not found!');
  }
  return console.log(data[0]['description']);
};

breedFetcher(theBreed, pullOutMsg);