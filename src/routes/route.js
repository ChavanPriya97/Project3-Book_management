const express = require("express");
const router = express.Router();
const bookController=require("../controllers/bookController")
const userController = require("../controllers/userController");
const reviewController = require("../controllers/reviewController");
const middleware= require("../middlewares/auth")

/***********************************user register *****************************/

router.post("/register", userController.register_user);

/***********************************login *************************/
router.post("/login",userController.userLogin)

/***************************************create Book**************************/

router.post("/books",bookController.createBook)

/*****************************getbooks********************************************/

router.get("/books",middleware.authenticate,bookController.getbooks)

/**************************get Book By BookId *****************************************/

router.get("/books/:bookId",bookController.getBookById)

/*************************update books******************************************************* */
router.put("/books/:bookId",bookController.updateBook)

/***********************************delete books************************************ */
router.delete("/books/:bookId",bookController.deletebookbyId)

/***********************************create review***********************************/
router.post("/books/:bookId/review",reviewController.createReview)

module.exports = router;
