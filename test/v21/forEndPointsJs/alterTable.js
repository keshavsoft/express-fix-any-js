import path from "path";
import { fileURLToPath } from "url";

import index from "../../../index.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const output = index({
    inTargetPath: __dirname,
    inTableName: "TAB1",
    inFileType: "fromEndPointsJs",
    inAlterType: "addTableName"
});

console.log("aaaaaaa : ", output);
