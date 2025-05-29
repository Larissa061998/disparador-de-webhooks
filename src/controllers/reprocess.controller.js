/**
 * Controller de Reprocessamento
 */
const reprocessWebhook = (req, res) => {
  const { ids } = req.body;

  // Simulação de protocolo
  return res.status(202).json({
    protocolo: "PROT123456",
    recebidos: ids
  });
};

const reprocessByEmail = (req, res) => {
  // Simulação de reprocessamento por email
  return res.status(202).json({
    protocolo: "EMAIL987654",
    message: "Reprocessamento agendado por e-mail"
  });
};

const reprocessByEvent = (req, res) => {
  // Simulação de reprocessamento por evento
  return res.status(202).json({
    protocolo: "EVENT456789",
    message: "Reprocessamento agendado por evento"
  });
};

module.exports = {
  reprocessWebhook,
  reprocessByEmail,
  reprocessByEvent
};