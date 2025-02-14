const express = require('express');
const controller = require('./controller');

const routes = express.Router();

/**
 * @api {post} v1/sendwa/ send message on wa
 * @apiDescription send status message on wa
 * @apiVersion 1.0.0
 * @apiName send wa message
 * @apiGroup wa
 * @apiPermission public
 *
 * @apiParam  {file}               file           file
 * @apiParam  {String=video,image} fileType       type of image
 *
 * @apiError (Bad Request 400)   ValidationError  Some parameters may contain invalid values
 */

routes.route('/:st_name/:status/:mobile/:time').get(controller.sendWA);

module.exports = routes;
