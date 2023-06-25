const allowedOrigins = ["http://localhost:5071"];

const corsOptions = {
  origin: (origin, callback) => {
    if (origin && allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed according to CORS policy"));
    }
  },
  credential: true,
  optionsSuccessStatus: 200,
};

module.export = corsOptions