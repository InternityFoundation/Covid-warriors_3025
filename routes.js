const express = require("express");

const AppCtrl = require("../controllers/app_controller");

const router = express.Router();

router.post("/academic", AppCtrl.createAcademic);
router.post("/personal", AppCtrl.createPersonal);
router.post("/job", AppCtrl.createJob);

module.exports = router;
