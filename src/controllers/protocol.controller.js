/**
 * Controller de Protocolos
 */
const listProtocols = (req, res) => {
  // Simulação de retorno
  return res.status(200).json({
    protocolos: [
      { id: "PROT123", status: "pendente" },
      { id: "PROT456", status: "concluído" }
    ]
  });
};

module.exports = { listProtocols };
