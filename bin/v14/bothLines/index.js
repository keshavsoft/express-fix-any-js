import forImportLine from "./forImportLine/index.js";
import forUseLine from "./forUseLine/index.js";

const startFunc = ({ inFolderNameToInsert, inFileType, inJsPath }) => {
    forImportLine({ inFolderNameToInsert, inFileType, inJsPath })
    forUseLine({ inFolderNameToInsert, inFileType, inJsPath })
};

export default startFunc;

// startFunc({ folderNameToInsert, fileType });