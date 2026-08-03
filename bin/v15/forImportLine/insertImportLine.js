import fs from 'fs';
import findInsertIndex from "./findInsertIndex.js";

function build(template, parts) {
    return template.replace(/\{(\d+)\}/g, (_, i) => parts[i]);
};

const addLines = ({
    inLines,
    inNewLine,
    inInsertAtIndex,
    inGapBefore = false,
    inGapAfter = false
}) => {
    let line = inNewLine;

    if (inGapBefore) line = "\n" + line;
    if (inGapAfter) line = line + "\n";

    inLines.splice(inInsertAtIndex, 0, line);
};

const addLines2 = ({
    inLines,
    inNewLine,
    inInsertAtIndex,
    inGapBefore = false,
    inGapAfter = false
}) => {
    const items = [];

    if (inGapBefore) items.push("\n");
    items.push(inNewLine);
    if (inGapAfter) items.push("\n");

    inLines.splice(inInsertAtIndex, 0, ...items);
};

const addLines1 = ({ inLines, inNewLine, inInsertAtIndex,
    inGapBefore = false, inGapAfter = false }) => {

    if (inGapBefore) {
        inLines.splice(inInsertAtIndex, 0, "\n");
    };

    inLines.splice(inInsertAtIndex, 0, inNewLine);

    if (inGapAfter) {
        inLines.splice(inInsertAtIndex, 0, "\n");
    };
};

const startFunc = ({ inStory, fileContent, filePath, extractRegex,
    inFolderNameToInsert, lineType = "importLines", inTemplate, inParts }) => {

    const foundUseLinesStory = inStory.linesStory[lineType].find(element => {
        return element.part1 === inFolderNameToInsert;
    });

    if (!foundUseLinesStory) {
        const newLine = build(inTemplate, inParts);

        const lines = fileContent.split(/\r?\n/);

        const insertStory = findInsertIndex({
            onlyIndexesValues: inStory?.onlyIndexesValues,
            extractRegex, presentKey: "importLines"
        });

        addLines({
            inLines: lines, inInsertAtIndex: insertStory?.index,
            inNewLine: newLine, inGapBefore: insertStory?.gapBefore,
            inGapAfter: insertStory?.gapAfter
        });

        // lines.splice(insertAtIndex, 0, newLine);

        fs.writeFileSync(filePath, lines.join(fileContent.includes("\r\n") ? "\r\n" : "\n"));
    };
};

export default startFunc;