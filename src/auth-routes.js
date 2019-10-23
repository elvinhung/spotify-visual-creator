const express = require('express');
const queryString = require('querystring');
const router = express.Router();

router.get("/callback", (req, res) => {
  const code = req.query.code;
  res.redirect("/#" +
    queryString.stringify({
      access_token: code,
    })
  );
});

module.exports = router;