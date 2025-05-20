const jwt = require('jsonwebtoken');
const JWT_SECRET = 'seusegredoseguro';

module.exports = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) return res.status(401).send({ error: 'Acesso negado' });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch {
    res.status(401).send({ error: 'Token inválido' });
  }
};
