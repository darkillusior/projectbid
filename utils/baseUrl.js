const baseUrl =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:3000"
   :"http://projectbid-seven.vercel.app";

module.exports = baseUrl;
