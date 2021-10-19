require('dotenv').config();
const jwt = require('jsonwebtoken');
const fs = require('fs');

const privateKey = fs.readFileSync('./private.key', 'utf8');

function auth(req, res, next) {
  const sessionToken = req.headers.authtoken;

  if (!sessionToken) {
    return res.status(401).send({ Error: 'Token not provided' });
  }

  const [scheme, token] = sessionToken.split(' ');

  if (!/^Bearer$/i.test(scheme)) {
    return res.status(401).send({ Error: 'Token malformed' });
  }

  try {
    jwt.verify(token, privateKey, (err, decoded) => {
      req.userId = decoded.id;
    });
    return next();
  } catch (err) {
    return res.status(400);
  }
}
module.exports = { auth };
