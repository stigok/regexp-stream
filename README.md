# regexp-stream

## Install

    npm i regexp-stream

## Usage

    const split = require('split');

    // Outputs all lines starting with a word
    const pattern = '^(\\w+)';
    const flags = '';
    const regex = new RegexpStream(pattern, flags);
    process.stdin
      .pipe(split()) // split on newlines
      .pipe(regex)
      .pipe(process.stdout);

Constructor params are passed directly to [`new RegExp(pattern[, flags])`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp).

See more examples in [./examples]().

## Contribute

Please do! If you have an idea, please post an issue. If you did something with your idea, please post a PR.

## Todo

  - Accept regex type param

## License

CC0-1.0
