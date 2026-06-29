// v2/AppJs/index.js

import checkLines from "./checkLines.json" with {type: "json"};
import alterFile from "./common/AlterFile/index.js";

const updateAppJs = ({ inJsFilePath, inCheckLines,
    showLog = false }) => {

    const localCheckLines = inCheckLines || checkLines;
    // console.log("bbbbbbbbbbbb : ", localCheckLines);

    alterFile({
        jsFilePath: inJsFilePath,
        toInsertLine: localCheckLines.importLines.toInsertLine,
        duplicationCheck: localCheckLines.importLines.duplicationCheck,
        insertAfter: localCheckLines.importLines.insertAfter,
        showLog
    });

    alterFile({
        jsFilePath: inJsFilePath,
        toInsertLine: localCheckLines.useLines.toInsertLine,
        duplicationCheck: localCheckLines.useLines.duplicationCheck,
        insertAfter: localCheckLines.useLines.insertAfter,
        showLog
    });

    return false;
};

export default updateAppJs;