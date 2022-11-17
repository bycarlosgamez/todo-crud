//Handles render edit page
//Handles PUT method request for edit tasks
//Handles DELETE method request for delete tasks

const express = require("express");
const router = express.Router();
const editController = require("../controllers/edit");

router.get("/:id", editController.getEdit);
router.get("/remove/:id", editController.deleteTask);
router.post("/:id", editController.updateTask);

module.exports = router;
