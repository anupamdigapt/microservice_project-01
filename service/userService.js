const { User } = require('../models/User');

const index = async () => {
  return await User.findAll();
};

const store = async (userData) => {
  return await User.create(userData);
};

module.exports = {
 index,
 store
}


