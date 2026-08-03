import forImportLine from "./forImportLine/index.js";

const startFunc = ({ importValue, consumeValue, inFileType, jsFilePath }) => {

    const fromImportLine = forImportLine({
        inValueToInsert: importValue,
        inFileType, regexKey: "import",
        templateKey: "importRegex",
        inJsPath: jsFilePath, presentKey: "importLines"
    });

    const fromUseLine = forImportLine({
        inValueToInsert: consumeValue,
        inFileType, regexKey: "consumption",
        templateKey: "consumptionRegex",
        inJsPath: jsFilePath, presentKey: "useLines"
    });

    return { fromImportLine, fromUseLine }
};

export default startFunc;