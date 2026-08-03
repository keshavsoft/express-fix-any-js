import fs from 'fs';

function build(template, parts) {
    return template.replace(/\{(\d+)\}/g, (_, i) => parts[i]);
};

const findImportLinesFromNpmIndex = ({ inStory }) => {
    const importLinesFromNpm = inStory?.linesStory?.importLinesFromNpm;

    const lastLine = importLinesFromNpm[importLinesFromNpm.length - 1];

    return lastLine?.lineNumber;
};

const findImportLinesIndex = ({ inStory }) => {
    const importLines = inStory?.linesStory?.importLines;

    const lastLine = importLines[importLines.length - 1];

    return lastLine?.lineNumber;
};

const findInsertIndex = ({ onlyIndexesValues, extractRegex }) => {
    let insertIndex;

    mainLoop: for (const element of extractRegex?.toInsertIndex?.import) {
        const splitValues = element.split(".");
        const firstValue = splitValues[0];
        const secondValue = splitValues[1];

        if (splitValues.length > 1) {
            if (firstValue in onlyIndexesValues) {
                if (onlyIndexesValues[firstValue]) {
                    if (secondValue in onlyIndexesValues[firstValue]) {
                        insertIndex = onlyIndexesValues[firstValue][secondValue];
                        break mainLoop;
                    };
                };
            };
        } else {
            switch (element) {
                case "first":
                    insertIndex = 0;
                    break mainLoop;
                    break;

                default:
                    break;
            }
        };
    };

    return insertIndex;
};

const startFunc = ({ inStory, fileContent, filePath, extractRegex,
    inFolderNameToInsert, lineType = "importLines", inTemplate, inParts }) => {

    const foundUseLinesStory = inStory.linesStory[lineType].find(element => {
        return element.part1 === inFolderNameToInsert;
    });

    if (!foundUseLinesStory) {
        const newLine = build(inTemplate, inParts);

        const lines = fileContent.split(/\r?\n/);

        // findInsertIndex({ inStory });

        // const lastLine = inStory.lines[lineType][inStory.lines[lineType].length - 1];
        // const insertAtIndex = lastLine.lineNumber;

        const insertAtIndex = findInsertIndex({
            onlyIndexesValues: inStory?.onlyIndexesValues,
            extractRegex
        });

        lines.splice(insertAtIndex, 0, newLine);

        fs.writeFileSync(filePath, lines.join(fileContent.includes("\r\n") ? "\r\n" : "\n"));
    };
};

export default startFunc;