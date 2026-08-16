const ApiHandler = (requestHandler) => {
  Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
};
