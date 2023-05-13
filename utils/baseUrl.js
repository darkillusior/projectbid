const baseUrl =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:3000"
   :"https://projectbid-kamalsinghkhanna.onrender.com";

module.exports = baseUrl;
