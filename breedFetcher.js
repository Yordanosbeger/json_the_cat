
const request = require('request');

const breedName = process.argv[2];

const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

request(url, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
    return;
  }

  if (response.statusCode !== 200) {
    console.error('Failed to fetch breed data. Status code:', response.statusCode);
    return;
  }

  const data = JSON.parse(body);

  if (data.length === 0) {
    console.error('Breed not found.');
    return;
  }

  const firstBreed = data[0];
  console.log('Description for', breedName, ':', firstBreed.description);
});
