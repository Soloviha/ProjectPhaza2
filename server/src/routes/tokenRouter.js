const { Router } = require('express');

const generateTokens = require('../utils/generateTokens');
const cookiesConfig = require('../configs/cookieConfig');
const { verifyRefreshToken } = require('../middlewares/verifyTokens');

const tokensRouter = Router();

tokensRouter.get('/refresh', verifyRefreshToken, (req, res) => {
  const { accessToken, refreshToken } = generateTokens({
    user: res.locals.user,
  });

  return res
    .cookie('refreshToken', refreshToken, cookiesConfig.refresh)
    .json({ user: res.locals.user, accessToken });
});

module.exports = tokensRouter;
