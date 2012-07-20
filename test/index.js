var jwt = require('../index'),
	expect = require('expect.js'),
	path = require('path'),
	assert = require('assert');


describe('sign', function () {

	it('should throw exception if the key is empty', function (){
		var threw = false;
		try
		{
			jwt.sign({ foo: 'bar' }, null);
		}
		catch(err){
			threw = true;
		}
		
		assert.ok(threw);
	});

	it('should throw exception if the payload is empty', function () {
		var threw = false;
		try
		{
			jwt.sign(null, 'asf');
		}
		catch(err){
			threw = true;
		}
		
		assert.ok(threw);

	});

	it('should throw exception if the key is not valid', function () {
		var invalid = require('fs').readFileSync(path.join(__dirname, '/invalid.pem'), 'utf8');
		var threw = false;
		try
		{
			jwt.sign('asf', invalid);
		}
		catch(err){
			threw = true;
		}
		
		assert.ok(threw);
	});

	it('signs the payload', function (){
		var payload = {
			"iss": 'foo@developer.gserviceaccount.com',
			"scope": 'https://www.googleapis.com/auth/bigquery',
			"aud":"https://accounts.google.com/o/oauth2/token",
			"exp": ~~(new Date().getTime() / 1000) + (30 * 60),
			"iat": ~~(new Date().getTime() / 1000 - 60)
		};
		var key = require('fs').readFileSync(path.join(__dirname, '/test.pem'), 'utf8');

		var signed = jwt.sign(payload, key);

		assert.equal(3, signed.split('.').length);
		assert.ok(signed.split('.')[2]);
	});

});