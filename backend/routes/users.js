var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

  res.json({
    "profileIconId": 3024,
    "name": "Boljedor",
    "summonerLevel": 67,
    "accountId": 28908143,
    "id": 24456996,
    "revisionDate": 1524687224000
  })
});


//profileIcon http://ddragon.leagueoflegends.com/cdn/6.24.1/img/profileicon/588.png
module.exports = router;
