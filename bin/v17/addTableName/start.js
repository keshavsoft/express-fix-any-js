import fs from "fs";

import path from "path";

import forImportLine from "./forImportLine/index.js";
import forUseLine from "./forUseLine/index.js";

const alterEndPointsJs = ({ filePath, inTableName }) => {
    try {
        let content = fs.readFileSync(filePath, 'utf8');

        content = content.replaceAll("<TABLE_NAME>", inTableName);

        fs.writeFileSync(filePath, content, "utf8");

        // writeFile(filePath, content);
    } catch (e) {
        handleError(e);
    };
};

const startFunc = ({ inTableName, inFileType, jsFilePath,
    inTargetPath
}) => {
    let fromInternal;

    switch (inFileType) {
        case "fromEndPointsJs":

            fromInternal = alterEndPointsJs({
                filePath: path.join(inTargetPath, "end-points.js"),
                inTableName
            });

            break;

        default:
            break;
    };

    return fromInternal;
};

export default startFunc;