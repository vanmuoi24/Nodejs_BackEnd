const express = require("express");

const router = express.Router();
const {
  getupdate,
  homepage,
  postCreateuser,
  Create,
  postUpdateuser,
  postdeleteuser,
  postcomfirmdelete,
} = require("../controller/homeController");
router.get("/home", homepage);
router.get("/create", Create);
router.get("/update/:id", getupdate);
router.post("/create_user", postCreateuser);
router.post("/update_user", postUpdateuser);
router.post("/comfirm_delete/:id", postdeleteuser);
router.post("/comfirm_delete", postcomfirmdelete);
module.exports = router;
