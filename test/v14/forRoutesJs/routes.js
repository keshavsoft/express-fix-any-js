import express from 'express';

import { router as routerFromdoctors } from './doctors/end-points.js';
import { router as routerFromdoctors1 } from './doctors1/end-points.js';

const router = express.Router();

router.use("/doctors", routerFromdoctors);
router.use("/doctors1", routerFromdoctors1);

export { router };
