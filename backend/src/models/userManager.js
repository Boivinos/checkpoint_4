const AbstractManager = require("./AbstractManager");

class userManager extends AbstractManager {
  constructor() {
    super({ table: "magic_user" });
  }

  verify(user) {
    return this.database.query(
      `select user_name, id, isAdmin, booster_restant from
      ${this.table} where email =? AND password = ?
      `,
      [user.email, user.password]
    );
  }

  addCardInDeck(user_id, card_id) {
    return this.database.query(
      `insert into deck (
      user_id,
      card_id       
    ) values (?,?)
      `,
      [user_id, card_id]
    );
  }

  boosterCount(user_id, count) {
    return this.database.query(
      `update magic_user set booster_restant=? where id = ?
      `,
      [count, user_id]
    );
  }
  create(data) {
    return this.database.query(
      `insert into magic_user (user_name,email,password)
      values (?,?,?)
      
      `,
      [data.user_name, data.email, data.password]
    );
  }
}

module.exports = userManager;
