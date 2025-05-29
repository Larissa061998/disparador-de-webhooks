const jwt = require('jsonwebtoken');
const { SECRET } = require('../middleware/auth.middleware');

function login(cnpj, senha) {
  if (cnpj === '12345678000100' && senha === 'senha123') {
    const payload = { cnpj };
    const token = jwt.sign(payload, SECRET, { expiresIn: '1h' });
    return { token };
  }
  throw new Error('Credenciais inválidas');
}

module.exports = { login };
