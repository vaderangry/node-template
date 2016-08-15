"use strict";

process.env.NODE_ENV = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';
global.PRODUCTION = process.env.NODE_ENV === 'production';

var config = require('config');
var logger = require('mag')('main');

logger.info('Daemon started');

// 1. Connect to DB, AMQP, redis, etc.
// 2. Pass control to your master event listener.
