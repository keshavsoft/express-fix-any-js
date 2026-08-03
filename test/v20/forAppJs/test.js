import path from "path";
import { fileURLToPath } from "url";

import index from "../../../index.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const appJsPath = path.join(__dirname, "app.js");

const output = index({
    jsFilePath: appJsPath,
    inValueToInsert: "api1",
    importValue: "api1",
    consumeValue: "api2",
    inFileType: "fromAppJs",
    inTargetPath: __dirname
});

console.log("aaaaaaa : ", output);
