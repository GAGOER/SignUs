'use strict';

/**
 * moderate service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::moderate.moderate');
