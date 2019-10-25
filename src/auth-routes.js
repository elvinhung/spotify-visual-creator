const spotify = require('./spotify');
const express = require('express');
const queryString = require('querystring');
const request = require('request');
const router = express.Router();

router.get("/callback", (req, res) => {
  const code = req.query.code;

  const authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    form: {
      code: code,
      redirect_uri: spotify.REDIRECT_URI,
      grant_type: 'authorization_code'
    },
    headers: {
      'Authorization': 'Basic ' + (new Buffer(spotify.CLIENT_ID + ':' + spotify.CLIENT_SECRET).toString('base64'))
    },
    json: true
  };

  request.post(authOptions, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      const  { access_token, refresh_token } = body;
      res.redirect("/#" +
        queryString.stringify({
          access_token: access_token,
          refresh_token: refresh_token,
        })
      );
    } else {
      res.redirect("/#" +
        queryString.stringify({
          error: 'invalid_credentials',
        })
      );
    }
  });
});

module.exports = router;