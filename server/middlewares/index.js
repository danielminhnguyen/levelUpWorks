const errorHandler = (err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500);
  res.render("error", { error: err });
};

const simpleLogger = (req, res, next) => {
  console.log(`Request Received: ${req.method} ${req.url}`, new Date().toISOString());
  next();
};

const allowCORS = (req, res, next) => {
  const origin = req.get("origin");
  res.header("Access-Control-Allow-Origin", origin);
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
};

export { errorHandler, simpleLogger, allowCORS };
