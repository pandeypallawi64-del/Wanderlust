const express=require("express");
const router=express.Router({mergeParams:true});
const WrapAsync=require("../utils/WrapAsync.js");
const ExpressError=require("../utils/ExpressError.js");
const Review = require("../model/review.js");
const Listing = require("../model/listing.js");
const {validateReview, isLoggedIn,isReviewAuthor}=require("../middleware.js");

const reviewController=require("../controllers/reviews.js");
const review = require("../model/review.js");

//post review route
router.post("/",isLoggedIn, validateReview, WrapAsync (reviewController.createReview));

//delete review route
router.delete("/:reviewId",isLoggedIn,isReviewAuthor, WrapAsync (reviewController.destroyReview));

module.exports=router;