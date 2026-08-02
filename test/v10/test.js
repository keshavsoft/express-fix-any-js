import path from "path";
import { fileURLToPath } from "url";

import index from "../../index.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const appJsPath = path.join(__dirname, "app.js");

function runTests() {
    const output = index({
        jsFilePath: appJsPath,
        inFolderNameToInsert: "api",
        inFileType: "fromAppJs"
    });

    return output;
};

runTests();
