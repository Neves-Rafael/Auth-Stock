const knex = require("../database/knex");
const AppError = require("../utils/AppError");

class UsersValidatedController {
  async index(request, response) {
    const { user } = request;

    const checkUserExists = await knex("users").where({ id: user.id });

    if (checkUserExists.length === 0) {
      throw new AppError("Usuário não Autenticado.", 401);
    }

    return response.status(201).json();
  }
}

module.exports = UsersValidatedController;
