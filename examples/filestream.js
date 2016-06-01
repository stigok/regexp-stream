const RegexpStream = require('../');
const fs = require('fs');

const regex = new RegexpStream('npm i (.+)$', 'm');

fs.createReadStream('../README.md', {encoding: 'utf8'})
  .pipe(regex)
  .pipe(process.stdout);

// Outputs: regexp-stream
