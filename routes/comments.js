const express = require("express");
const router = express.Router();

const controller = require("../controllers/comment_controller");
const passport = require("passport");


router.post("/", passport.checkAuthentication, controller.createComment);

router.get("/destroy/:id",passport.checkAuthentication, controller.destroyCommment);

module.exports = router;
