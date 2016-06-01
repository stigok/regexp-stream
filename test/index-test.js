const assert = require('chai').assert;
const StreamTest = require('streamtest').v2;

const RegexStream = require('../');

describe('regexp-stream', function () {
  it('matches several lines', function (done) {
    const regex = new RegexStream('(hello|bar|21)', '');
    const lines = [
      'hello, world!',
      'foo bar',
      '42 is twice the size as 21'
    ];

    StreamTest.fromChunks(lines)
      .pipe(regex)
      .pipe(StreamTest.toChunks((err, matched) => {
        if (err) {
          done(err);
        }
        assert.deepEqual(matched.map(m => m.toString()), ['hello\n', 'bar\n', '21\n']);
        done();
      }));
  });
});
