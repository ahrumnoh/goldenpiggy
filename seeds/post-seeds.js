const { Post } = require('../models');

const postdata = [
  {
    title: 'Do you know who I am?',
    post_content: 'Hello world',
    user_id: 1
  },
  {
    title: 'Tron will be $1, early of next year 2022',
    post_content: 'Such an innovative block-chain system, expands their territory to EU countires',
    user_id: 2
  },
  {
    title: 'XRP, Finally made a essentail contracts!!',
    post_content: 'Such a mega hit, shocking info!, Ripple made a partnership with Novatti in Thailand, In addition, with Qartar national bank!!',
    user_id: 3
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;