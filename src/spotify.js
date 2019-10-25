const querystring = require('querystring');

const CLIENT_ID = "ad01ad1e341e426997dbbc2dbee01d30";
const CLIENT_SECRET = "5e68ca160b614e6dad0aa91f70ecabe6";
const REDIRECT_URI = "http://localhost:3000/callback";
const QUERY_STRING = querystring.stringify({
  response_type: 'code',
  client_id: CLIENT_ID,
  redirect_uri: REDIRECT_URI,
});
const AUTH_LINK = "https://accounts.spotify.com/authorize?" + QUERY_STRING;

module.exports = {
  CLIENT_ID: CLIENT_ID,
  CLIENT_SECRET: CLIENT_SECRET,
  REDIRECT_URI: REDIRECT_URI,
  AUTH_LINK: AUTH_LINK,
};