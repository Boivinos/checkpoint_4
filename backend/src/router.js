const express = require("express");

const multer = require("multer");
const upload = multer({ dest: "./public/uploads/" });

const router = express.Router();
const cardController = require("./controllers/cardControllers");
const userController = require("./controllers/userControllers");

router.get("/api/cards", cardController.getAllCards);
router.get("/api/deck/:id", cardController.getAllCardsFromDeck);
router.get("/api/cards/:id", cardController.getOneCard);
router.get("/api/booster/:id", userController.verifyBooster);
router.get("/api/random/booster", cardController.getARandomBooster);
router.put("/api/cards/:id", upload.single("image"), cardController.editCard);
router.post("/api/cards/", upload.single("image"), cardController.addCard);
router.delete("/api/cards/:id", cardController.destroy);
router.post(
  "/api/addCard/:id",
  userController.addCardInDeck,
  userController.updateBoosterCount
);

router.post("/api/connexion", userController.verifyPassword);
router.post(
  "/api/inscription",
  userController.createUser,
  userController.createUserBaseDeck
);

module.exports = router;
