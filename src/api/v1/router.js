const express = require('express');
// const fileRoutes = require('./files/routes');
const sendWARoutes = require('./WAmessage/routes');

const router = express.Router();

/**
 * GET v1/docs
 */
// router.use('/docs', express.static('docs'));
/**
 * GET v1/images
 */
// router.use('/images', express.static('public'));
/**
 * GET v1/files
 */
// router.use('/files', fileRoutes);
/**
 * GET v1/user
 */
// router.use('/user', userRoutes);
/**
 * post v1/sendwa
 */
router.use('/sendwa', sendWARoutes);

module.exports = router;
