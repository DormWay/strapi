'use strict';

/**
 * worklog service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::worklog.worklog');
