'use strict';

/**
 * moderate router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::moderate.moderate');
