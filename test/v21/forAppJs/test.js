import path from "path";
import { fileURLToPath } from "url";

import index from "../../../index.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const appJsPath = path.join(__dirname, "app.js");

const output = index({
    jsFilePath: appJsPath,
    inFileType: "fromAppJs",
    inTargetPath: __dirname,
    inValue: "api1", temporaryValue: "k1", OutValue: "api2"
});

console.log("aaaaaaa : ", output);
