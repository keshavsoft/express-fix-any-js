import alterFile from "./common/AlterFile/index.js";
import validateCheckLines from "./validateCheckLines.js";

const updateAppJs = ({ inJsFilePath, inCheckLines,
    showLog = false }) => {

    const localCheckLines = inCheckLines;
    
    validateCheckLines(localCheckLines);

    const importResult = alterFile({
        jsFilePath: inJsFilePath,
        toInsertLine: localCheckLines.importLines.toInsertLine,
        duplicationCheck: localCheckLines.importLines.duplicationCheck,
        insertAfter: localCheckLines.importLines.insertAfter,
        showLog
    });

    const useResult = alterFile({
        jsFilePath: inJsFilePath,
        toInsertLine: localCheckLines.useLines.toInsertLine,
        duplicationCheck: localCheckLines.useLines.duplicationCheck,
        insertAfter: localCheckLines.useLines.insertAfter,
        showLog
    });

    return { importResult, useResult };
};

export default updateAppJs;