import forImportLine from "./forImportLine/index.js";
import forUseLine from "./forUseLine/index.js";

const startFunc = ({ inFolderNameToInsert, inFileType, jsFilePath }) => {
    const fromImportLine = forImportLine({
        inFolderNameToInsert, inFileType,
        inJsPath: jsFilePath
    });

    const fromUseLine = forUseLine({
        inFolderNameToInsert, inFileType,
        inJsPath: jsFilePath
    });

    return { fromImportLine, fromUseLine }
};

export default startFunc;