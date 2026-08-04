import path from "path";
import { fileURLToPath } from "url";

import index from "../../../index.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const appJsPath = path.join(__dirname, "end-points.js");

const output = index({
    jsFilePath: appJsPath,
    inFileType: "fromEndPointsJs",
    inTargetPath: __dirname,
    inValue: "tab1", temporaryValue: "k1111", OutValue: "tab2"
});

console.log("aaaaaaa : ", output);
