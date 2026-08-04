import path from "path";
import { fileURLToPath } from "url";

import index from "../../../index.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const appJsPath = path.join(__dirname, "routes.js");

const output = index({
    jsFilePath: appJsPath,
    inFolderNameToInsert: "v1",
    inFileType: "fromRoutesJs"
});

console.log("aaaaaaa : ", output);
