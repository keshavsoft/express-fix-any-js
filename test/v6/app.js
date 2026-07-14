import express from 'express';

import funcFrom${folderName} from './${folderName}/controller.js';

const router = express.Router();

router.get('/${endpoint}', (req, res) => funcFrom${folderName}({ req, res, inTablePath: tablePath }));

export { router };
