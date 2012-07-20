Module for signing jwt tokens based on a private key in .pem format.

# Usage

```js

var jwtSigner = require('jwt-sign'),
	payload = {
		"iss": 'foo@developer.gserviceaccount.com',
		"scope": 'https://www.googleapis.com/auth/bigquery',
		"aud":"https://accounts.google.com/o/oauth2/token",
		"exp": ~~(new Date().getTime() / 1000) + (30 * 60),
		"iat": ~~(new Date().getTime() / 1000 - 60)
	},
	key = require('fs').readFileSync(path.join(__dirname, '/test.pem'), 'utf8');

var signed = jwt.sign(payload, key);

```

# Tests
Tests can be run with mocha or by executing 'npm test'. In order for all the tests to pass, please place a valid 'test.pem' file in the 'test' folder.

# License

The MIT License : http://opensource.org/licenses/MIT

Copyright (c) 2011-2012 Gustavo Machado. http://machadogj.com

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.