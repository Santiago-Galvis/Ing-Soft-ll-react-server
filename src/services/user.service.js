const Boom = require("@hapi/boom");
const user_model = require("../models/user.model");

class UserService {
  async createUser(new_user) {
    new_user.save();
    return new_user;
  }
}

module.exports = UserService;
