import path from "path";
import { fileURLToPath } from "url";

import index from "../../../index.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const appJsPath = path.join(__dirname, "routes.js");

const output = index({
    jsFilePath: appJsPath,
    inFolderNameToInsert: "doctors2",
    inFileType: "fromRoutesJsEnd"
});

console.log("aaaaaaa : ", output);
