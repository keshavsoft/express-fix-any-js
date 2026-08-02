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

const findInsertIndex = ({ inStory }) => {
    const importLines = findImportLinesIndex({ inStory });
    const importLinesFromNpm = findImportLinesFromNpmIndex({ inStory });

    return importLines ? importLines : importLinesFromNpm;
};

const startFunc = ({ inStory, fileContent, filePath,
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

        const insertAtIndex = findInsertIndex({ inStory });

        lines.splice(insertAtIndex, 0, newLine);

        fs.writeFileSync(filePath, lines.join(fileContent.includes("\r\n") ? "\r\n" : "\n"));
    };
};

export default startFunc;