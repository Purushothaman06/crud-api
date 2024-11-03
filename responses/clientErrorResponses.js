// Client Error Response Handlers
const sendBadRequest = (res, error) => {
  return res.status(400).json({
    success: false,
    message: "Bad Request",
    error: error || "Invalid input provided",
  });
};

const sendUnauthorized = (res, error) => {
  return res.status(401).json({
    success: false,
    message: "Unauthorized",
    error: error || "Authentication required",
  });
};

const sendPaymentRequired = (res, error) => {
  return res.status(402).json({
    success: false,
    message: "Payment Required",
    error: error || "Payment is required to access this resource",
  });
};

const sendForbidden = (res, error) => {
  return res.status(403).json({
    success: false,
    message: "Forbidden",
    error: error || "You do not have permission to access this resource",
  });
};

const sendNotFound = (res, error) => {
  return res.status(404).json({
    success: false,
    message: "Not Found",
    error: error || "Requested resource not found",
  });
};

const sendMethodNotAllowed = (res, error) => {
  return res.status(405).json({
    success: false,
    message: "Method Not Allowed",
    error: error || "The requested method is not allowed for this resource",
  });
};

const sendNotAcceptable = (res, error) => {
  return res.status(406).json({
    success: false,
    message: "Not Acceptable",
    error: error || "Cannot generate response in requested format",
  });
};

const sendTimeout = (res, error) => {
  return res.status(408).json({
    success: false,
    message: "Request Timeout",
    error: error || "Request took too long to process",
  });
};

const sendConflict = (res, error) => {
  return res.status(409).json({
    success: false,
    message: "Conflict",
    error: error || "Resource conflict occurred",
  });
};

const sendGone = (res, error) => {
  return res.status(410).json({
    success: false,
    message: "Gone",
    error: error || "Resource no longer available",
  });
};

const sendLengthRequired = (res, error) => {
  return res.status(411).json({
    success: false,
    message: "Length Required",
    error: error || "Content length header required",
  });
};

const sendPreconditionFailed = (res, error) => {
  return res.status(412).json({
    success: false,
    message: "Precondition Failed",
    error: error || "Resource failed to meet preconditions",
  });
};

const sendPayloadTooLarge = (res, error) => {
  return res.status(413).json({
    success: false,
    message: "Payload Too Large",
    error: error || "Request entity exceeds limits",
  });
};

const sendUnsupportedMediaType = (res, error) => {
  return res.status(415).json({
    success: false,
    message: "Unsupported Media Type",
    error: error || "Media type not supported",
  });
};

const sendValidationError = (res, error) => {
  return res.status(422).json({
    success: false,
    message: "Unprocessable Entity",
    error: error || "Unable to process the request",
  });
};

const sendTooManyRequests = (res, error) => {
  return res.status(429).json({
    success: false,
    message: "Too Many Requests",
    error: error || "Rate limit exceeded",
  });
};
