import hookFolder from "./hookFolder/start.js";

const startFunc = ({ inFolderNameToInsert, inFileType, jsFilePath,
    inTargetPath
}) => {
    let fromInternal;

    fromInternal = hookFolder({
        inFolderNameToInsert, inFileType, jsFilePath,
        inTargetPath
    });

    return fromInternal;
};

export default startFunc;