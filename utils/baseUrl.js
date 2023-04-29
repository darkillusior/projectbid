const baseUrl =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:3000"
   :"https://projectbid-4zl9mrwgx-darkillusior.vercel.app";

module.exports = baseUrl;
