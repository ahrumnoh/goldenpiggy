const router = require('express').Router();

const commentRoutes = require('./comment-routes');
const postRoutes = require('./post-routes');
const userRoutes = require('./user-routes');
const cryptoRoutes = require('../crypto-routes');  //<--new

router.use('/comments', commentRoutes);
router.use('/posts', postRoutes);
router.use('/users', userRoutes);
router.use('/crypto', cryptoRoutes);  //<--new

module.exports = router;