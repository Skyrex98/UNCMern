const fs = require('fs');
const axios = require('axios');
const inquirer = require('inquirer');

inquirer
  .prompt({
    message: 'Enter your GitHub username',
    name: 'username'
  })
  // .then(function({ username }) {
  .then(({ username, color }) => {
    console.log('color:', color);
    // template literal > concatention
    const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;

    axios.get(queryUrl).then(res => {
      const repoNames = res.data.map(repo => repo.name); // return a new array
      const repoNamesString = repoNames.join('\n');

      fs.writeFile('repos.txt', repoNamesString, err => {
        if (err) {
          throw err;
        }
      });

      console.log(`SAVED ${repoNames.length} repos`);
    });
  });
