import fs from 'fs';

import {
    findImportLinesFromNpmIndex, findImportLinesIndex,
    findVariablesDeclareHereLinesIndex
} from "../forInsertIndex.js";

const findInsertIndex = ({ inStory }) => {
    const importLines = findImportLinesIndex({ inStory });
    const importLinesFromNpm = findImportLinesFromNpmIndex({ inStory });
    const variablesDeclareHereLines = findVariablesDeclareHereLinesIndex({ inStory });

    // findVariablesDeclareHereLinesIndex
    return importLines ? importLines : variablesDeclareHereLines;
};

function build(template, parts) {
    return template.replace(/\{(\d+)\}/g, (_, i) => parts[i]);
};

const startFunc = ({ inStory, fileContent, filePath,
    inFolderNameToInsert, lineType = "useLines", inTemplate, inParts }) => {

    const foundUseLinesStory = inStory.linesStory[lineType].find(element => {
        return element.part1 === inFolderNameToInsert;
    });

    if (!foundUseLinesStory) {
        const newLine = build(inTemplate, inParts);

        const lines = fileContent.split(/\r?\n/);

        // const lastUseLine = inStory.lines[lineType][inStory.lines[lineType].length - 1];
        // const insertAtIndex = lastUseLine.lineNumber;

        const insertAtIndex = findInsertIndex({ inStory });

        lines.splice(insertAtIndex, 0, newLine);

        fs.writeFileSync(filePath, lines.join(fileContent.includes("\r\n") ? "\r\n" : "\n"));
    };
};

export default startFunc;