const RegexpStream = require('../');
const split = require('split');

const pattern = '^(\\w+)';
const flags = '';
const regex = new RegexpStream(pattern, flags);
process.stdin
  .pipe(split()) // split on newlines
  .pipe(regex)
  .pipe(process.stdout);
