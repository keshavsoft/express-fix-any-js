import express from 'express';

import { router as routerFromFold1 } from './Fold1/end-points.js';

const router = express.Router();

router.use('/table1', routerFromFold1);

export { router };
