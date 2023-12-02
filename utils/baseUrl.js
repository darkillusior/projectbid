const baseUrl =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:3001"
   :"https://projectbid-kamalsinghkhanna.onrender.com";

module.exports = baseUrl;
