import fs from 'fs';

import defaultFunc from 'pattern-collector-anyjs-story';
import insertUseLine from "./insertUseLine.js";

const startFunc = ({ inFolderNameToInsert, inFileType, inJsPath }) => {
    const folderNameToInsert = inFolderNameToInsert;
    const localJsPath = inJsPath;

    const fileContent = fs.readFileSync(localJsPath, 'utf8');

    const story = defaultFunc({
        fileContent,
        fileType: inFileType
    });

    insertUseLine({
        inStory: story,
        fileContent, extractRegex: story?.extractRegex,
        filePath: localJsPath, inFolderNameToInsert: folderNameToInsert,
        inTemplate1: story.regexForPullLinesStory.consumptionRegex.reverseTemplate,
        inTemplate: story.reverseTemplates.consumptionRegex,
        inParts: [folderNameToInsert, `${story.variablesConnection}${folderNameToInsert}`]
    });
};

export default startFunc;

// startFunc({ folderNameToInsert, fileType });