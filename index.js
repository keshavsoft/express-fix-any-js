import getLatestVersion from "./bin/core/getLatestVersion.js";
import startV6 from "./bin/v6/start.js";
import startV7 from "./bin/v7/start.js";

const runners = {
    v6: startV6,
    v7: startV7
};

const load = ({ jsFilePath, inCheckLines, showLog }) => {
    const v = getLatestVersion();
    const runner = runners[v];

    if (!runner) {
        throw new Error(`Unsupported version: ${v}`);
    }

    runner({ jsFilePath, inCheckLines, showLog });
};

export default load;