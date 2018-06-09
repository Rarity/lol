var express = require('express');
var router = express.Router();
var data = require('../data/champion-masteries.json')
/* GET users listing. */
router.get('/', function(req, res, next) {

  res.json(data)
});


//profileIcon http://ddragon.leagueoflegends.com/cdn/6.24.1/img/profileicon/588.png
module.exports = router;
