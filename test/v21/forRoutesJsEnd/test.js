import path from "path";
import { fileURLToPath } from "url";

import index from "../../../index.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const appJsPath = path.join(__dirname, "routes.js");

const output = index({
    jsFilePath: appJsPath,
    inFileType: "fromRoutesJsEnd",
    inTargetPath: __dirname,
    inValue: "doc1", temporaryValue: "k1", OutValue: "doc2"
});

console.log("aaaaaaa : ", output);
