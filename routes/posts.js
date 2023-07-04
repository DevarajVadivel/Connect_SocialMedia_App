const express = require("express");
const router = express.Router();

const controller = require("../controllers/posts_controller");
const passport = require("passport");


router.post("/content", passport.checkAuthentication, controller.createPost);

router.get("/destroy/:id",passport.checkAuthentication,controller.destroyPost);

module.exports = router;
