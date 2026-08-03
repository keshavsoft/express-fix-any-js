import path from "path";
import { fileURLToPath } from "url";

import index from "../../../index.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const appJsPath = path.join(__dirname, "app.js");

const output = index({
    jsFilePath: appJsPath,
    inFolderNameToInsert: "api1",
    inFileType: "fromAppJs",
    inAlterType: "hookFolder", inTargetPath: __dirname
});

console.log("aaaaaaa : ", output);
