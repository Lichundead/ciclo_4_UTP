const express = require("express");
const router = express.Router();
const login_adminController = require("../controllers/login_admin.controller");

router.post("/", login_adminController.create);
router.get("/", login_adminController.find);
router.get("/:id", login_adminController.findOne);
router.put("/:id", login_adminController.update);
router.delete("/:id", login_adminController.remove);

module.exports = router;
