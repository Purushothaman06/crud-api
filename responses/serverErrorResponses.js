// Server Error Response Handlers
const sendServerError = (res, error) => {
  return res.status(500).json({
    success: false,
    message: "Internal Server Error",
    error: error || "An unexpected error occurred",
  });
};

const sendNotImplemented = (res, error) => {
  return res.status(501).json({
    success: false,
    message: "Not Implemented",
    error: error || "Functionality not implemented",
  });
};

const sendBadGateway = (res, error) => {
  return res.status(502).json({
    success: false,
    message: "Bad Gateway",
    error: error || "Invalid response from upstream server",
  });
};

const sendServiceUnavailable = (res, error) => {
  return res.status(503).json({
    success: false,
    message: "Service Unavailable",
    error: error || "Service temporarily unavailable",
  });
};

const sendGatewayTimeout = (res, error) => {
  return res.status(504).json({
    success: false,
    message: "Gateway Timeout",
    error: error || "Upstream server timeout",
  });
};
