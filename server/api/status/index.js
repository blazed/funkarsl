'use strict'

import express from 'express';
import controller from './status.controller';

const router = express.Router();

router.get('/', controller.get);

export default router;
