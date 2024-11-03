// Specialized Response Handlers
const sendPaginatedResponse = (res, data, page, limit, total) => {
  return res.status(200).json({
    success: true,
    data: data,
    pagination: {
      page: parseInt(page),
      limit: parseInt(limit),
      total: total,
      pages: Math.ceil(total / limit),
    },
  });
};

const sendStreamResponse = (res, data) => {
  return res.status(200).json({
    success: true,
    message: "Stream data ready",
    data: data,
    isStream: true,
  });
};

const sendBulkResponse = (res, results) => {
  return res.status(200).json({
    success: true,
    message: "Bulk operation completed",
    results: results,
    totalProcessed: results.length,
    successCount: results.filter((r) => r.success).length,
    failureCount: results.filter((r) => !r.success).length,
  });
};

const sendCustomResponse = (res, statusCode, success, message, data, error) => {
  return res.status(statusCode).json({
    success: success,
    message: message,
    data: data,
    error: error,
  });
};
