import path from "path";
import { fileURLToPath } from "url";

import index from "../../../index.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const output = index({
    inTargetPath: __dirname,
    inFileType: "fromEndPointsJs",
    alterArray: [{ key: "<TABLE_NAME>", value: "tab1111111111" }]
});

console.log("aaaaaaa : ", output);
