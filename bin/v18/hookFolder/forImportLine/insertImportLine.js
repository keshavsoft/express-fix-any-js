import fs from 'fs';
import findInsertIndex from "../findInsertIndex.js";
import addLines from "../addLines.js";

function build(template, parts) {
    return template.replace(/\{(\d+)\}/g, (_, i) => parts[i]);
};

const startFunc = ({ inStory, fileContent, filePath, extractRegex,
    inFolderNameToInsert, lineType = "importLines", inTemplate,
    inParts, fileType }) => {

    const foundUseLinesStory = inStory.linesStory[lineType].find(element => {
        return element.part1 === inFolderNameToInsert;
    });

    if (!foundUseLinesStory) {
        const newLine = build(inTemplate, inParts);

        const lines = fileContent.split(/\r?\n/);

        const insertStory = findInsertIndex({
            onlyIndexesValues: inStory?.onlyIndexesValues,
            extractRegex: extractRegex?.toInsertIndex?.[fileType]?.import,
            presentKey: lineType
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