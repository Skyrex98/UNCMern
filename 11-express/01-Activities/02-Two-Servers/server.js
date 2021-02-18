const http = require('http');

const PORTONE = 7000;
const PORTTWO = 7500;

const quotes = [
  'To err is human, but to really foul things up you need a computer.',
  'Never trust a computer you cant throw out a window.',
  'quote 3',
  'quote 4',
  'quote 5',
];
const randomNumber = () => Math.floor(Math.random() * quotes.length);

const handleRequestOne = (request, response) =>
  response.end(quotes[randomNumber()]);

const handleRequestTwo = (request, response) =>
  response.end(quotes[randomNumber()]);

const serverOne = http.createServer(handleRequestOne);
const serverTwo = http.createServer(handleRequestTwo);

serverOne.listen(PORTONE, () => console.log('SERVER ONE IS RUNNING'));
serverTwo.listen(PORTTWO, () => console.log('SERVER TWO IS RUNNING'));
