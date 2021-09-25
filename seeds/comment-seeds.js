const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'I can do it better.',
    user_id: 2,
    post_id: 1
  },
  {
    comment_text: 'Jesus loves you.',
    user_id: 1,
    post_id: 1
  },
  {
    comment_text: 'I know I can do it.',
    user_id: 2,
    post_id: 3
  },

];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;