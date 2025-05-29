/**
 * Health Check Controller
 * Verifica se a API está funcionando corretamente.
 */
exports.healthCheck = async (req, res) => {
  res.status(200).json({
    status: 'Success'
  });
};