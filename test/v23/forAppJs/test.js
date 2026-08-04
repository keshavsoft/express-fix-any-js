import path from "path";
import { fileURLToPath } from "url";

import index from "../../../index.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const output = index({
    inTargetPath: __dirname,
    inFileType: "fromAppJs",
    inTargetPath: __dirname,
    inValue: "api1", temporaryValue: "k1", OutValue: "api2"
});

console.log("aaaaaaa : ", output);
