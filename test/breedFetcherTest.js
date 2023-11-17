breedFetcherTest.js

const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      // Expect no error for this scenario
      assert.equal(err, null);

      // Expected description
      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // Compare returned description
      assert.equal(expectedDesc, desc.trim());

      // Signal the completion of the test
      done();
    });
  });

  it('returns an error for an invalid breed, via callback', (done) => {
    fetchBreedDescription('InvalidBreed', (err, desc) => {
      // Expect an error for this scenario
      assert.notEqual(err, null);

      // Expect description to be null
      assert.equal(desc, null);

      // Signal the completion of the test
      done();
    });
  });
});

