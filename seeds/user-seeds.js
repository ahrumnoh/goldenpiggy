const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'sydneyrose',
    email: 'sydneyrose@gmail.com',
    password: 'password123'
  },
  {
    username: 'iloverose',
    email: 'iloverose@gmail.com',
    password: 'password123'
  },  
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;