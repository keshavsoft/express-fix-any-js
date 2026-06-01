import readFile from "../readFile.js";
import checkDuplicate from "./checkDuplicate.js";
import findInsertIndex from "./findInsertIndex.js";
import writeFile from "../writeFile.js";

import buildUpdatedContent from "./buildUpdatedContent.js";

const validateDuplicate = ({ content, jsFilePath, duplicationCheck }) => {
    return checkDuplicate({
        inContent: content,
        inFilePath: jsFilePath,
        inSearchText: duplicationCheck
    });
};

const locateInsertPoint = ({ content, insertAfter }) => {
    return findInsertIndex({
        inContent: content,
        inPatterns: insertAfter
    });
};

const alterFile = ({
    jsFilePath,
    toInsertLine,
    duplicationCheck,
    insertAfter = [],
    showLog = false
}) => {
    const content = readFile(jsFilePath);

    const duplicateInfo = validateDuplicate({ content, jsFilePath, duplicationCheck });

    // const index = locateInsertPoint({ content, importInsertAfter });
    const insertInfo = locateInsertPoint({
        content,
        insertAfter
    });

    const updated = buildUpdatedContent({
        content,
        insertInfo,
        toInsertLine,
        insertAfter
    });

    writeFile(jsFilePath, updated);
};

export default alterFile;