import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

import index from "../../index.js";

import getLatestVersion from "../../bin/core/getLatestVersion.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const appJsPath = path.join(__dirname, "app.js");

function runTests() {
    const latestVersion = getLatestVersion();

    const output = index({
        jsFilePath: appJsPath,
        inFolderNameToInsert: "api"
    });
};

runTests();
