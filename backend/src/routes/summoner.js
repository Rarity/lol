var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.json({
    "profileIconId": 3024,
    "name": "Boljedor",
    "summonerLevel": 67,
    "accountId": 28908143,
    "id": 24456996,
    "revisionDate": 1524687224000
  });
});

module.exports = router;
