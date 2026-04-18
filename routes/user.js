const express=require("express");
const router=express.Router({mergeParams:true});
const User=require("../model/user.js");
const WrapAsync = require("../utils/WrapAsync.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware");

const userController=require("../controllers/user.js");

router.route("/signup")
.get(userController.renderSignupForm)
.post(WrapAsync(userController.signup));

router.route("/login")
.get(userController.renderLoginForm)
.post(saveRedirectUrl,
    passport.authenticate('local',
     { failureRedirect: '/login',
         failureFlash:true})
         ,userController.login);

router.get("/logout",userController.logout);

module.exports=router;