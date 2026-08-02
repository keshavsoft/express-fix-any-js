import bothLines from './bothLines/test.js';

const startFunc = ({ inFolderNameToInsert, inFileType, jsFilePath }) => {

    return bothLines({
        inFolderNameToInsert, inFileType,
        inJsPath: jsFilePath
    });
};

export default startFunc;