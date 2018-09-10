const express = require("express");
const router = express.Router();
const fileController = require("../controller/controller");
//routes for http metthods (post,get,put and delete)
router.post("/create", fileController.createFile);
router.get("/read", fileController.readFile);
router.delete("/:id/delete", fileController.deleteFile);
router.put("/:id/update", fileController.updateFile);
module.exports = router;
