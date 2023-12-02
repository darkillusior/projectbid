const baseUrl =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:3001"
   :"https://projectbid-six.vercel.app/";

module.exports = baseUrl;
