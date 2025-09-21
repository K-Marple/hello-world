// Needed Resources
const express = require("express");
const router = express.Router();
const controller = require("../controllers/index");

// Route to Hello World
router.get("/", controller.helloWorld);

// Exports
module.exports = router;
