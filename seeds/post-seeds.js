const { Post } = require('../models');

const postdata = [
  {
    title: 'Do you know who I am?',
    post_content: 'Hello world',
    user_id: 1
  },
  {
    title: 'This is my github Website',
    post_content: 'Goldenpiggyinvestment',
    user_id: 2
  },
  {
    title: 'I love Software Engineering.',
    post_content: 'I feel very happy',
    user_id: 1
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;