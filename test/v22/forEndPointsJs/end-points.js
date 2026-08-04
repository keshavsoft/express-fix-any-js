import express from 'express';

import k1111 from './tab1/controller.js';

const tableName = "TAB1.json";
const tablePath = "Data/TAB1.json";
const configPath = "Config/Schemas/TAB1.json";

const router = express.Router();

router.get('/tab2', (req, res) => k1111({ req, res, inTablePath: tablePath }));

export { router };