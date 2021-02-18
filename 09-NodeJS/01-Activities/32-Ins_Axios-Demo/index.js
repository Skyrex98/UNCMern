const axios = require('axios');

axios.get('https://www.omdbapi.com/?t=Batman&apikey=trilogy').then((res) => {
  console.log(res.data);
});

// 1. make sure you have a package.json if not run npm init
// 2. npm i axios (or any package you want)
// 3. You should have node_modules folder, package-lock.json, and package.json
// 4. You can now write code
