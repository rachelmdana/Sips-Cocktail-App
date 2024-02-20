const jwt = require('jsonwebtoken');

function createTokenForUser(username) {
  const payload = { username };
  const secretKey = 'spookyspook';

  return jwt.sign(payload, secretKey);
}

module.exports = createTokenForUser;
