// v2/AppJs/index.js

import checkLines from "./checkLines.json" with {type: "json"};
import alterFile from "./common/AlterFile/index.js";

const validateCheckLines = (obj) => {
    if (typeof obj !== "object" || obj === null || Array.isArray(obj)) {
        throw new TypeError("inCheckLines must be a valid object.");
    }
    for (const key of ["importLines", "useLines"]) {
        if (!(key in obj)) {
            throw new Error(`inCheckLines must contain "${key}".`);
        }
        const section = obj[key];
        if (typeof section !== "object" || section === null || Array.isArray(section)) {
            throw new TypeError(`inCheckLines.${key} must be an object.`);
        }
        if (typeof section.toInsertLine !== "string") {
            throw new TypeError(`inCheckLines.${key}.toInsertLine must be a string.`);
        }
        if (typeof section.duplicationCheck !== "string") {
            throw new TypeError(`inCheckLines.${key}.duplicationCheck must be a string.`);
        }
        if (!Array.isArray(section.insertAfter)) {
            throw new TypeError(`inCheckLines.${key}.insertAfter must be an array.`);
        }
    }
};

const updateAppJs = ({ inJsFilePath, inCheckLines,
    showLog = false }) => {

    const localCheckLines = (inCheckLines && Object.keys(inCheckLines).length > 0) ? inCheckLines : checkLines;
    
    validateCheckLines(localCheckLines);

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