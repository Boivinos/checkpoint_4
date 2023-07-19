const express = require("express");

const multer = require("multer");
const upload = multer({ dest: "./public/uploads/" });

const router = express.Router();
const cardController = require("./controllers/cardControllers");
const userController = require("./controllers/userControllers");

router.get("/api/cards", cardController.getAllCards);
router.get("/api/cards/:id", cardController.getOneCard);
router.put("/api/cards/:id", upload.single("image"), cardController.editCard);
router.post("/api/cards/", upload.single("image"), cardController.addCard);
router.delete("/api/cards/:id", cardController.destroy);

router.post("/api/connexion", userController.verifyPassword);

module.exports = router;
