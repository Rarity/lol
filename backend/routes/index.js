import express from 'express';
import { Router } from 'express';

import dotenv from 'dotenv'

const router = Router()
dotenv.config()


/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title:  process.env.API_KEY });
});

module.exports = router;
