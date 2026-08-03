import fs from "fs";

import path from "path";

import fileNamesJson from '../fileNames.json' with {type: 'json'};

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

    fromInternal = alterEndPointsJs({
        filePath: path.join(inTargetPath, fileNamesJson[inFileType]),
        inTableName
    });


    return fromInternal;
};

export default startFunc;