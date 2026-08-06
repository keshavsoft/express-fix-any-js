import express from 'express';

import funcFromtab1 from './tab1/controller.js';

const tableName = "tab1111111111.json";
const tablePath = "Data/tab1111111111.json";
const configPath = "Config/Schemas/tab1111111111.json";

const router = express.Router();

router.get('/tab2', (req, res) => funcFromtab1({ req, res, inTablePath: tablePath }));

export { router };