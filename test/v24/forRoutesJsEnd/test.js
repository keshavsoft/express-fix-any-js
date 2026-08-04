import path from "path";
import { fileURLToPath } from "url";

import index from "../../../index.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const output = index({
    inFileType: "fromRoutesJsEnd",
    inTargetPath: __dirname,
    inValue: "doc1", OutValue: "doc2"
});

console.log("aaaaaaa : ", output);
