const crypto = require('crypto');

module.exports = function genUid() {
  return crypto.randomBytes(4).toString('HEX');
}