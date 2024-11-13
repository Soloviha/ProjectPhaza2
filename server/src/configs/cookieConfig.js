const jwtConfig = require('./jwtConfig');

const cookiesConfig = {
  access: {
    httpOnly: true,
    maxAge: jwtConfig.refresh.expiresIn,
  },
  refresh: {
    maxAge: jwtConfig.refresh.expiresIn,
    httpOnly: true,
  },
};

module.exports = cookiesConfig;
