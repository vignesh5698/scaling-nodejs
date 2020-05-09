const cluster = require('cluster');
const cpus = require('os').cpus();
const http = require('http');

const numberOfCpus = cpus.length;
if (cluster.isMaster) {
  console.log('Master process...', process.pid);
  for(let i=0;i<numberOfCpus;i++) {
    cluster.fork();
  }

  cluster.on('exit', worker => {  //  Architecting zero down-time
    console.log(`Worker process ${process.pid} has died`);
    // console.log(`Only ${Object.keys(cluster.workers).length} remaining`);
    console.log('Starting another worker...');
    cluster.fork();
  });
} else {
  http.createServer((req, res) => {
    res.end(`Hello, this is process: ${process.pid}`);

    if(req.url == '/kill') {
      process.exit();
    } else {
      console.log('This is worker process/....', process.pid);
    }
  }).listen(3000);
}

// loadtest -n 300 http://localhost:3000