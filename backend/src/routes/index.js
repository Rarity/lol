import express from 'express';
let router = express.Router();
import dotenv from "dotenv"

dotenv.config()


/* GET home page. */
router.get('/', (req, res, next) => {
  console.log(process.env.API_KEY)
  res.render('index', { title:  process.env.API_KEY});
});

export default router;
