/*
 * jwt-sign
 *
 * JSON Web Token RSA with SHA256 sign for Google APIs
 *
 * Copyright(c) 2012 Gustavo Machado
 * MIT Licensed
 */

/**
 * module dependencies
 */
var crypto = require('crypto');

/**
 * expose object
 */
var jwt = module.exports;

/**
 * version
 */
jwt.version = '0.1.0';

/**
 * Sign the Google API jwt token.
 *
 * @param {Object} the payload part of the token.
 * @return {string} the signed and base64 encoded jwt token.
 * @api public
 */
jwt.sign = function jwt_sign(payload, key) {
  // Check key
  if (!key) {
    throw new Error('key is required');
  }

  if (payload === undefined || payload === null) {
    throw new Error('palyload is required');
  }

  // header, typ is fixed value, alg supported by google is RSA with SHA256
  var header = { typ: 'JWT', alg: 'RS256' };

  // create segments, all segment should be base64 string
  var segments = [];
  segments.push(base64urlEncode(JSON.stringify(header)));
  segments.push(base64urlEncode(JSON.stringify(payload)));

  var signature = sign(segments.join('.'), key);
  if (!signature) {
    throw new Error('error generating signature');
  }
  
  segments.push(signature);
  return segments.join('.');
};


/**
 * private util functions
 */
function sign (data, key) {
  var signer = crypto.createSign("RSA-SHA256");
  signer.update(data);
  return signer.sign(key, 'base64');
}

function base64urlEncode(str) {
  return encodeURIComponent(new Buffer(str).toString('base64'));
}
