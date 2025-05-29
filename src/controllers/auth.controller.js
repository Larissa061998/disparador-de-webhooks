/**
 * Controller de Autenticação
 */
const login = (req, res) => {
  const { cnpj, senha } = req.body;

  // Simulação de autenticação
  if (cnpj === "12345678000100" && senha === "senha123") {
    return res.status(200).json({
      token: "fake-jwt-token",
      message: "Login realizado com sucesso"
    });
  }

  return res.status(401).json({ error: "Credenciais inválidas" });
};

module.exports = { login };
