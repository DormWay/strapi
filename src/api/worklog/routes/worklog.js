'use strict';

/**
 * worklog router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::worklog.worklog');
