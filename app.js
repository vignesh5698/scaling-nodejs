const http = require('http');
const PORT = parseInt(process.argv[2] || 3000);

const languages = [
  'C',
  'C++',
  'Javascript',
  'Python',
  'Golang',
  'Erlang'
]

const server = http.createServer((req, res) => {
  const randomIndex = Math.floor(Math.random() * languages.length);
  const payLoad = JSON.stringify({
    port: PORT,
    processId: process.pid,
    Advice: `Please, don't select ${languages[randomIndex]} as your primary language..!!`
  });
  console.log(`Advice: ${languages[randomIndex]}`);
  res.end(payLoad);
});

server.listen(PORT);
console.log(`Advice for programmers running on ${PORT}`);
