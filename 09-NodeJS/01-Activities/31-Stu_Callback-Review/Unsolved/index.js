const fs = require('fs');

fs.readFile('animals.json', 'utf8', (err, data) => {
  if (err) {
    throw err;
  }

  // Parse the JSON string to an object
  const animalJSON = JSON.parse(data);

  // Create two new arrays to contain the cats and dogs objects
  const dogs = animalJSON.filter((animal) => animal.species === 'dog');
  const cats = animalJSON.filter((animal) => animal.species === 'cat');

  // animalJSON.forEach((animal) => {
  //   if (animal.species === 'dog') {
  //     dogs.push(animal);
  //   } else {
  //     cats.push(animal);
  //   }
  // });

  const dogJSON = JSON.stringify(dogs, null, 2);
  const catJSON = JSON.stringify(cats, null, 2);

  fs.writeFile('cats.json', catJSON, (err) => err && console.log(err));

  fs.writeFile('dogs.json', dogJSON, (err) => {
    if (err) {
      throw err;
    }
  });
});
