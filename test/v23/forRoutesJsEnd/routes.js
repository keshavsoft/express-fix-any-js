import express from 'express';

import { router as routerFromdoc1 } from './doc1/end-points.js';

const router = express.Router();

router.use("/doc2", routerFromdoc1);

export { router };
