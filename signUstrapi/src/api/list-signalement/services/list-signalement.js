'use strict';

/**
 * list-signalement service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::list-signalement.list-signalement');
