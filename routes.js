'use strict';

import express from 'express';
import logger from './utils/looger.js';

const router = express.Router();

import start from './controllers/start.js';
import galleries from './controllers/galleries.js';
import about from './controllers/about.js';
import gallery from './controllers/gallery.js';

router.get('/', start.createView);
router.get('/galleries', galleries.createView);
router.get('/about', about.createView);
router.get('/gallery/:id', gallery.createView);

router.get('/error', (request, response) => response.status(404).end('Page not found.'));

export default router;
