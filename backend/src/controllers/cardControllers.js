const models = require("../models");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

const getAllCards = (req, res) => {
  models.card
    .findAll()
    .then(([cards]) => {
      res.send(cards);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};

const getOneCard = (req, res) => {
  models.card
    .find(req.params.id)
    .then(([card]) => {
      res.send(card[0]);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};

const editCard = (req, res) => {
  const item = req.body;
  item.id = parseInt(req.params.id, 10);

  const newFileName = `${uuidv4()}-${req.file.originalname}`;
  fs.rename(
    `./public/uploads/${req.file.filename}`,
    `./public/uploads/${newFileName}`,
    (err) => {
      if (err) {
        console.error("Error during rename operation:", err);
        throw err;
      }
    }
  );
  item.image = `${process.env.BACKEND_URL}/uploads/${newFileName}`;

  models.card
    .update(item)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.send(item);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};
const addCard = (req, res) => {
  const item = req.body;
  item.id = parseInt(req.params.id, 10);

  const newFileName = `${uuidv4()}-${req.file.originalname}`;
  fs.rename(
    `./public/uploads/${req.file.filename}`,
    `./public/uploads/${newFileName}`,
    (err) => {
      if (err) {
        console.error("Error during rename operation:", err);
        throw err;
      }
    }
  );
  item.image = `${process.env.BACKEND_URL}/uploads/${newFileName}`;

  models.card
    .add(item)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.send(item);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const destroy = (req, res) => {
  models.card
    .delete(req.params.id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  getAllCards,
  getOneCard,
  editCard,
  destroy,
  addCard,
};
