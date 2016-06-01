const util = require('util');
const Transform = require('stream').Transform;

util.inherits(regexStream, Transform);

function regexStream(pattern, options) {
  if (typeof pattern !== 'string') {
    throw new Error('Expected pattern of type string');
  }

  Transform.call(this, {});

  this.regex = new RegExp(pattern, options);
}

regexStream.prototype._transform = function (str, encoding, next) {
  if (str.length) {
    const match = this.regex.exec(str);
    if (match) {
      // Remove full match and return captured substrings on new lines
      match.shift();
      match.forEach(m => this.push(m + '\n'));
    }
  }
  next();
};

module.exports = regexStream;
