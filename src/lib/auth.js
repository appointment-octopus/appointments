require('dotenv').config();
const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');

const publicKey = fs.readFileSync(
  path.resolve(__dirname, './public.key'),
  'utf8'
);

function auth(req, res, next) {
  const sessionToken = req.headers.access_token;
  console.log(req.headers);
  console.log(sessionToken);
  if (!sessionToken) {
    return res.status(401).send({ Error: 'Token not provided' });
  }

  try {
    jwt.verify(sessionToken, publicKey, (err, decoded) => {
      console.log('+++++++++++++++++\n----------------------');
      console.log(decoded);
      console.log('+++++++++++++++++\n----------------------');
      req.params.user_id = decoded.sub;
    });
    return next();
  } catch (err) {
    console.log(err);
    return res.status(400);
  }
}

module.exports = { auth };
