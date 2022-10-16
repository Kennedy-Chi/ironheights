const express = require("express");
const bannerController = require("../controllers/bannerController");
const authController = require("../controllers/authController");
const aboutController = require("../controllers/aboutController");
const solarController = require("../controllers/solarController");
const quotesController = require("../controllers/quoteController");
const faqController = require("../controllers/faqController");
const generalController = require("../controllers/generalController");
const upload = require("../config/multer");
const deleteFile = require("../utils/deleteFile");
const router = express.Router();

/////////////////////////// START HOME ///////////////////////////
//---------------- START OF GALLERY --------------------//
router
  .route("/home/gallery")
  .post(
    authController.protect,
    upload.upload.array("gallery", 4),
    bannerController.createGallery
  )
  .get(bannerController.getAllGallery);

router
  .route("/home/gallery/:id")
  .patch(
    authController.protect,
    upload.upload.array("gallery", 4),
    bannerController.editGallery,
    deleteFile
  )
  .delete(bannerController.deleteGallery);

//---------------X END OF GALLERY X---------------------//

//---------------- START OF VIDEO ROUTES --------------------//
router
  .route("/home/video")
  .post(
    authController.protect,
    upload.upload.fields([
      { name: "thumbnail", maxCount: 1 },
      { name: "video", maxCount: 1 },
    ]),
    bannerController.createVideo
  )
  .get(authController.protect, bannerController.getAllVideo);

router
  .route("/home/videoStatus/:id")
  .patch(authController.protect, bannerController.videoStatus);

router
  .route("/home/video/:id")
  .patch(
    authController.protect,
    upload.upload.fields([
      { name: "thumbnail", maxCount: 1 },
      { name: "video", maxCount: 1 },
    ]),
    bannerController.editVideo
  )
  .delete(bannerController.deleteVideo);
//----------------X END OF VIDEO ROUTES X--------------------//
///////////////////////////XX END HOME XX///////////////////////////

/////////////////////////// START ABOUT ///////////////////////////

//---------------- START OF HISTORY ROUTES --------------------//
router
  .route("/about/history")
  .post(authController.protect, aboutController.createHistory)
  .get(aboutController.getAllHistory);

router
  .route("/about/historyStatus/:id")
  .patch(authController.protect, aboutController.historyStatus);

router
  .route("/about/history/:id")
  .patch(authController.protect, aboutController.editHistory)
  .delete(aboutController.deleteHistory);

//---------------X END OF HISTORY ROUTES X---------------------//
/////////////////////////XX END ABOUT XX/////////////////////////

/////////////////////////// START SOLAR ///////////////////////////

//---------------- START OF GALLERY --------------------//
router
  .route("/solar/gallery")
  .post(
    authController.protect,
    upload.upload.array("gallery", 6),
    solarController.createGallery
  )
  .get(solarController.getAllGallery);

router.route("/solar/gallery/:id").delete(solarController.deleteGallery);

//---------------X END OF GALLERY X---------------------//
/////////////////////////XX END SOLAR XX/////////////////////////

/////////////////////////// START FAQ ///////////////////////////

//---------------- START OF QUESTION --------------------//
router
  .route("/faq/question")
  .post(authController.protect, faqController.createQuestion)
  .get(authController.protect, faqController.getAllQuestion);

router
  .route("/faq/question/:id")
  .patch(authController.protect, faqController.editQuestion)
  .delete(faqController.deleteQuestion);

//---------------X END OF QUESTION X---------------------//
/////////////////////////XX END SOLAR XX/////////////////////////

/////////////////////////// START GENERAL ///////////////////////////
//---------------- START OF BANNER ROUTES --------------------//
router
  .route("/general/banner")
  .post(
    authController.protect,
    upload.upload.single("banner"),
    generalController.createBanner
  )
  .get(generalController.getAllBanner);

router
  .route("/general/banner/:id")
  .patch(
    authController.protect,
    upload.upload.single("banner"),
    generalController.editBanner
  )
  .delete(generalController.deleteBanner);

//---------------X END OF BANNER ROUTES X---------------------//

//---------------- START OF PAGE LISTINGS --------------------//
router
  .route("/general/page")
  .post(authController.protect, generalController.createPage)
  .get(generalController.getAllPage);

router
  .route("/general/page/:id")
  .patch(authController.protect, generalController.editPage)
  .delete(generalController.deletePage);

//---------------X END OF PAGE LISTINGS X---------------------//

//---------------- START OF COMPANY --------------------//
router
  .route("/general/company")
  .post(authController.protect, generalController.createGeneral)
  .get(generalController.getAllGeneral);

router
  .route("/general/company/:id")
  .patch(authController.protect, generalController.editGeneral);

//---------------X END OF COMPANY X---------------------//
/////////////////////////XX END GENERlAL XX/////////////////////////

//---------------- START OF LOAD ROUTES --------------------//
router
  .route("/quote/load")
  .post(
    // authController.protect,
    upload.upload.single("image"),
    quotesController.createLoad
  )
  .get(quotesController.getAllLoad);

router
  .route("/quote/load/:id")
  .patch(
    // authController.protect,
    upload.upload.single("image"),
    quotesController.editLoad
  )
  .delete(authController.protect, quotesController.deleteLoad);

//---------------X END OF LOAD ROUTES X---------------------//

//---------------- START OF LOAD ROUTES --------------------//
router
  .route("/quote/quotes")
  .post(authController.protect, quotesController.createQuote)
  .get(quotesController.getAllQuotes);
router.route("/quotation/:load").get(quotesController.getAllQuotation);

router
  .route("/quote/quotes/:id")
  .patch(quotesController.editQuote)
  .delete(quotesController.deleteQuote);

//---------------X END OF LOAD ROUTES X---------------------//
module.exports = router;
