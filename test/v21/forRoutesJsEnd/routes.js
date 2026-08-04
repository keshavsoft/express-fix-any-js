import express from 'express';

import { router as routerFromdoctors1 } from './doctors1/end-points.js';
import { router as routerFromdoctors2 } from './doctors2/end-points.js';

const router = express.Router();

router.use("/doctors1", routerFromdoctors1);
router.use("/doctors2", routerFromdoctors2);

export { router };
