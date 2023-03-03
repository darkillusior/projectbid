const baseUrl =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:3000"
   :null

module.exports = baseUrl;
