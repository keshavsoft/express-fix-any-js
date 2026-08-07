import forImportLine from "./forImportLine/index.js";

const startFunc = ({ inValue, OutValue,
    inFileType, inJsPath, inFileNameStory }) => {

    const localFileNameStory = inFileNameStory;

    const fromImportLine = forImportLine({
        inFileType, regexKey: "import",
        templateKey: "importRegex",
        inJsPath, presentKey: "importLines",
        inParts: [`${localFileNameStory?.temporaryValue}${inValue}`, inValue],
        inConsiderKey: "part2"
    });

    const fromUseLine = forImportLine({
        inParts: [`${localFileNameStory?.temporaryValue}${inValue}`, OutValue],
        inFileType, regexKey: "consumption",
        templateKey: "consumptionRegex",
        inJsPath, presentKey: "useLines",
        inConsiderKey: "part1"
    });

    return { fromImportLine, fromUseLine }
};

export default startFunc;