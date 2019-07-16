const router = require("express").Router();
const greeting = require('../controllers/home')

router.get("/", greeting.greeting);
router.get("/goodbye", greeting.goodbye);

module.exports = router;
