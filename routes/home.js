//Handles initial GET req for homepage
//Handles POST method requesto for adding a new task

const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home");

router.get("/", homeController.getIndex);
router.post("/", homeController.createTask);

module.exports = router;
