import forImportLine from "./forImportLine/index.js";

const startFunc = ({ inValue, temporaryValue, OutValue,
    inFileType, jsFilePath }) => {

    const fromImportLine = forImportLine({
        inFileType, regexKey: "import",
        templateKey: "importRegex",
        inJsPath: jsFilePath, presentKey: "importLines",
        inParts: [temporaryValue, inValue]
    });

    const fromUseLine = forImportLine({
        inParts: [temporaryValue, OutValue],
        inFileType, regexKey: "consumption",
        templateKey: "consumptionRegex",
        inJsPath: jsFilePath, presentKey: "useLines"
    });

    return { fromImportLine, fromUseLine }
};

export default startFunc;