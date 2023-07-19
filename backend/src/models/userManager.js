const AbstractManager = require("./AbstractManager");

class userManager extends AbstractManager {
  constructor() {
    super({ table: "magic_user" });
  }

  verify(user) {
    return this.database.query(
      `select user_name, id from
      ${this.table} where email =? AND password = ?
      `,
      [user.email, user.password]
    );
  }
}

module.exports = userManager;
