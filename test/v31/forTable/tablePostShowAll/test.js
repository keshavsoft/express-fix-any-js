import path from "path";
import { fileURLToPath } from "url";

import index from "../../../../index.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const output = index({
    inFileType: "tablePostShowAll",
    inTargetPath: __dirname,
    inValue: "insertWithMeta", OutValue: "insertWithMeta"
});

console.log("aaaaaaa : ", output);
