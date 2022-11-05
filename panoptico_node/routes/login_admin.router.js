const express = require("express");
const router = express.Router();
const login_adminController = require("../controllers/login_admin.controller");

router.post("/", login_adminController.create);
router.get("/", login_adminController.find);
router.get("/:email", login_adminController.findOne);
router.put("/:email", login_adminController.update);
router.delete("/:email", login_adminController.remove);


module.exports = router;
