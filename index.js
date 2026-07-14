import getLatestVersion from "./bin/core/getLatestVersion.js";
import { createRequire } from "module";

const require = createRequire(import.meta.url);

const load = ({ jsFilePath, inCheckLines, showLog }) => {
    const v = getLatestVersion();

    const module = require(`./bin/${v}/start.js`);

    module.default({ jsFilePath, inCheckLines, showLog });
};

export default load;