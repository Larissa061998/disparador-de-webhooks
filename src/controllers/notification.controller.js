/**
 * Controller de Notificações
 */
const listNotifications = (req, res) => {
  const { start, end } = req.query;

  // Simulação de retorno filtrado
  return res.status(200).json({
    start,
    end,
    notifications: [
      { id: 1, status: "enviada" },
      { id: 2, status: "falha" }
    ]
  });
};

module.exports = { listNotifications };
