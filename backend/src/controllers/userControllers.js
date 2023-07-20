const models = require("../models");

const browse = (req, res) => {
  models.user
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const verifyPassword = (req, res) => {
  models.user
    .verify(req.body)
    .then(([user]) => {
      if (user.length) {
        res.send(user[0]);
      } else {
        res.send("user not found");
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const verifyBooster = (req, res) => {
  models.user
    .find(req.params.id)
    .then(([rows]) => {
      const { booster_restant } = rows[0];
      res.send({
        booster_restant,
      });
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const addCardInDeck = (req, res, next) => {
  models.user
    .addCardInDeck(req.params.id, req.body.id)
    .then(() => {
      next();
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const updateBoosterCount = (req, res) => {
  const newCount = parseInt(req.body.booster_count) - 1;

  models.user
    .boosterCount(req.params.id, newCount)
    .then(() => {
      res.send("booster count updated");
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const createUser = (req, res, next) => {
  models.user
    .create(req.body)
    .then(() => {
      models.user
        .verify(req.body)
        .then(([user]) => {
          if (user.length) {
            req.body.created = user[0];
            next();
          } else {
            res.send("user not found");
          }
        })
        .catch((err) => {
          console.error(err);
          res.sendStatus(500);
        });
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const createUserBaseDeck = (req, res) => {
  models.card
    .createBaseDeck(req.body.created.id)
    .then(() => {
      res.send("user created");
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browse,
  verifyPassword,
  verifyBooster,
  addCardInDeck,
  updateBoosterCount,
  createUser,
  createUserBaseDeck,
};
