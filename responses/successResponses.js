// Success Response Handlers
const sendSuccess = (res, data) => {
  return res.status(200).json({
    success: true,
    data: data,
  });
};

const sendCreated = (res, data) => {
  return res.status(201).json({
    success: true,
    message: "Resource created successfully",
    data: data,
  });
};

const sendAccepted = (res, message) => {
  return res.status(202).json({
    success: true,
    message: message || "Request accepted and being processed",
  });
};

const sendNoContent = (res) => {
  return res.status(204).json({
    success: true,
    message: "Resource deleted successfully",
  });
};

const sendPartialContent = (res, data) => {
  return res.status(206).json({
    success: true,
    message: "Partial content delivered",
    data: data,
  });
};
