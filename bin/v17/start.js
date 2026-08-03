import hookFolder from "./hookFolder/start.js";
import addTableName from "./addTableName/start.js";

const startFunc = ({ inFolderNameToInsert, inFileType, jsFilePath,
    inAlterType = "hookFolder", inTargetPath, inTableName
}) => {
    let fromInternal;

    switch (inAlterType) {
        case "hookFolder":

            fromInternal = hookFolder({
                inFolderNameToInsert, inFileType, jsFilePath,
                inTargetPath
            });

            break;

        case "addTableName":

            fromInternal = addTableName({
                inTableName, inFileType, jsFilePath,
                inTargetPath
            });

            break;
        default:
            break;
    };

    return fromInternal;
};

export default startFunc;