'use strict';

/**
 * worklog controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::worklog.worklog');
