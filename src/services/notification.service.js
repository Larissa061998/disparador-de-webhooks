function listNotifications(start, end) {
  // Aqui pode-se integrar com DB no futuro
  return {
    filtros: { start, end },
    data: [] // mock
  };
}

module.exports = { listNotifications };
