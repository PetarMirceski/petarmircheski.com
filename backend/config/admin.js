module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '598fcf3c0f149b1de30a8d03d156a84c'),
  },
});
