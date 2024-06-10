const userService = require('../service/userService');
const { response } = require('../config/response');

const index = async (req, res) => {
  try {
    const users = await userService.getAllUsers(req.query);
    return response(res, users, 'Users retrieved successfully', 200);
  } catch (error) {
    return response(res, [], error.message, 500);
  }
};

const store = async (req, res) => {
  const { 
    name,
    email
  } = req.body;

  if (!name || !email) {
    return response(res, [], 'Name and email are required.', 400);
  }

  try {
    const user = await userService.createUser(req.body);
    return response(res, user, 'User created successfully', 201);
  } catch (error) {
    return response(res, [], error.message, 500);
  }
};

module.exports = {
  index,
  store
};
