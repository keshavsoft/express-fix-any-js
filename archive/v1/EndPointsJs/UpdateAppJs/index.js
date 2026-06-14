// v2/AppJs/index.js

import checkLines from "./checkLines.json" with {type: "json"};
import validateEndpoint from "./validations/validateEndpoint.js";
import alterFile from "./common/AlterFile/index.js";

const updateAppJs = ({ inEndPointsJsPath, actionName, inCheckLines,
    showLog = false }) => {

    validateEndpoint({ endpoint: actionName });

    const localCheckLines = inCheckLines || checkLines;
    // console.log("bbbbbbbbbbbb : ", localCheckLines);

    alterFile({
        jsFilePath: inEndPointsJsPath,
        toInsertLine: localCheckLines.importLines.toInsertLine,
        duplicationCheck: localCheckLines.importLines.duplicationCheck,
        insertAfter: localCheckLines.importLines.insertAfter,
        showLog
    });

    alterFile({
        jsFilePath: inEndPointsJsPath,
        toInsertLine: localCheckLines.useLines.toInsertLine,
        duplicationCheck: localCheckLines.useLines.duplicationCheck,
        insertAfter: localCheckLines.useLines.insertAfter,
        showLog
    });

    return false;
};

export default updateAppJs;