import hookFolder from "./hookFolder/start.js";
import alterFile from "./alterFile/start.js";

import {
    fileNamesJson as fromNpm,
    outputStructureJson as getOutputStructureJson
} from "pattern-collector-base-files";

import returnPath from "./returnPath.js";
import checkFile from "./checkFile.js";

const startFunc = ({ inValue, OutValue,
    inFileType, inTargetPath, alterArray }) => {

    const outputStructureJson = { ...getOutputStructureJson() };

    let fromInternal;
    let fromAlterFile;

    const fileNamesJson = fromNpm();

    const localFileNameStory = fileNamesJson[inFileType];
    const localJsPath = returnPath({ inFileNameStory: localFileNameStory, inTargetPath });

    if (!checkFile(localJsPath)) {
        outputStructureJson.KTF = false;
        outputStructureJson.KReason = `file not found : ${localJsPath}`;

        return outputStructureJson;
    };

    if (inValue && OutValue) {
        fromInternal = hookFolder({
            inValue, OutValue, inJsPath: localJsPath,
            inFileType, inTargetPath, inFileNameStory: localFileNameStory
        });
    };

    fromAlterFile = alterFile({
        alterArray, inFileType, inValue,
        inTargetPath, inFileNameStory: localFileNameStory
    });

    return { fromInternal, fromAlterFile };
};

export default startFunc;