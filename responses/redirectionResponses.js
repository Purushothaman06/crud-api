// Redirection Response Handlers
const sendMovedPermanently = (res, newLocation) => {
  return res.status(301).json({
    success: true,
    message: "Resource moved permanently",
    newLocation: newLocation,
  });
};

const sendTemporaryRedirect = (res, newLocation) => {
  return res.status(302).json({
    success: true,
    message: "Resource temporarily moved",
    newLocation: newLocation,
  });
};
