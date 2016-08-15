# Node.js template

This template suggests architecture convention for Node.js daemon.

## Architecture

### Directories

Overview of directory tree:

- `server/` - Base directory with server logic.
- `server/models` - Place for your stored models.
- `server/schemas` - Directory contains validation schemas for your input data streams.
- `server/domain` - Your domain logic.
- `server/lib` - Your support logic.
- `client/` - Client scripts (optional).
- `config/` - Config files.
- `web/` - Third party web-framework (optional).

### Launch

Daemon starting from `/server/server.js`.

### Config

[Config](https://www.npmjs.com/package/config).

### Logs

[Mag](https://www.npmjs.com/package/mag) - fast streaming logger. Use object container and markers for
organize log streams.

Example:

```JavaScript
var logger = {
    server: require('mag')('server'),
    amqp:   require('mag')('amqp')
};
```

### Management

Use [pm2](https://www.npmjs.com/package/pm2) for process management.

### Tests

Install globally [mocha](https://www.npmjs.com/package/mocha). For assertion use [chai](https://www.npmjs.com/package/chai).

Example:

```JavaScript
// File test/example.js

var assert = require('chai').assert;

function incNumber(number) {
    return number++;
}

describe('censor', function () {
    it('Test of incNumber function', function () {
        let number = 0;
        let result = incNumber(number);
        assert.equal(result, 1);
    });
});
```

Run `$ mocha`.
