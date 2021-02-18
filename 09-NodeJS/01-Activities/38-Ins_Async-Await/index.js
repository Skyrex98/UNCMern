// const axios = require('axios');
// const inquirer = require('inquirer');

// getMovie();

// async function getMovie() {
//   try {
//     const { movie } = await inquirer.prompt({
//       message: 'Search a movie:',
//       name: 'movie'
//     });

//     const { data } = await axios.get(`https://www.omdbapi.com/?t=${movie}&apikey=trilogy`);

//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// }

const goToDb = pwd => {
  if (pwd) {
    return 'success';
  }
  throw 'error no pwd to database!';
};

try {
  console.log(1 + 1);
  goToDb('somepassword');
} catch (error) {
  console.log('OH NO THERE WAS AN ERROR:', error);
}
