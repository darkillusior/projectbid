const baseUrl =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:3000"
   :"https://projectbid.vercel.app/";

module.exports = baseUrl;
