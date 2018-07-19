module.exports = {
    port: process.env.PORT ? process.env.PORT : 5000,
    mongooseUrl: process.env.PORT ? "mlab link" : "mongodb://localhost/carStore",
    jwtPass: "verySimplePassword"
};