const AbstractManager = require("./AbstractManager");

class cardManager extends AbstractManager {
  constructor() {
    super({ table: "magic_card" });
  }
  update(card) {
    return this.database.query(
      `update
      ${this.table} set card_name=?, description=?, image=?, cost=?, attack=?, defense=? where id=?
      `,
      [
        card.card_name,
        card.description,
        card.image,
        card.cost,
        card.attack,
        card.defense,
        card.id,
      ]
    );
  }
  add(card) {
    return this.database.query(
      `insert into
      ${this.table} (
        card_name,
        description,
        image,
        attack,
        defense,
        cost       
      ) values (?,?,?,?,?,?)
      `,
      [
        card.card_name,
        card.description,
        card.image,
        card.cost,
        card.attack,
        card.defense,
      ]
    );
  }
  getDeck(id) {
    return this.database.query(
      `SELECT * from ${this.table} 
      INNER JOIN deck 
      ON magic_card.id = deck.card_id
      WHERE user_id = ?`,
      [id]
    );
  }
  createBaseDeck(id) {
    return this.database.query(
      `insert into deck (user_id,card_id) values (?,1), (?,2),(?,3);
      `,
      [id, id, id]
    );
  }
}

module.exports = cardManager;
