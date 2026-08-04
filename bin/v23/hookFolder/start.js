import forImportLine from "./forImportLine/index.js";

const startFunc = ({ inValue, temporaryValue, OutValue,
    inFileType, inTargetPath }) => {

    const fromImportLine = forImportLine({
        inFileType, regexKey: "import",
        templateKey: "importRegex",
        inTargetPath, presentKey: "importLines",
        inParts: [temporaryValue, inValue]
    });

    const fromUseLine = forImportLine({
        inParts: [temporaryValue, OutValue],
        inFileType, regexKey: "consumption",
        templateKey: "consumptionRegex",
        inTargetPath, presentKey: "useLines"
    });

    return { fromImportLine, fromUseLine }
};

export default startFunc;