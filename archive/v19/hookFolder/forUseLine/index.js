import fs from 'fs';

import defaultFunc from 'pattern-collector-anyjs-story';
import insertUseLine from "./insertUseLine.js";
import insertLine from "../insertLine.js";

const startFunc = ({ inFolderNameToInsert, inFileType, inJsPath }) => {
    const folderNameToInsert = inFolderNameToInsert;
    const localJsPath = inJsPath;
    const presentKey = "useLines";

    const fileContent = fs.readFileSync(localJsPath, 'utf8');

    const story = defaultFunc({
        fileContent,
        fileType: inFileType
    });

    // insertUseLine({
    //     inStory: story,
    //     fileContent, extractRegex: story?.extractRegex,
    //     filePath: localJsPath, inFolderNameToInsert: folderNameToInsert,
    //     inTemplate1: story.regexForPullLinesStory.consumptionRegex.reverseTemplate,
    //     inTemplate: story.reverseTemplates.consumptionRegex,
    //     inParts: [folderNameToInsert, `${story.variablesConnection}${folderNameToInsert}`],
    //     fileType: inFileType
    // });


    insertLine({
        presentKey,
        linesStory: story.linesStory,
        onlyIndexesValues: story?.onlyIndexesValues,
        inStory: story,
        fileContent,
        importRegex: story?.extractRegex?.toInsertIndex?.[inFileType]?.consumption,
        filePath: localJsPath, inFolderNameToInsert: folderNameToInsert,
        inTemplate: story.reverseTemplates.consumptionRegex,
        inParts: [`${story.variablesConnection}${folderNameToInsert}`, folderNameToInsert],
        fileType: inFileType
    });
};

export default startFunc;

// startFunc({ folderNameToInsert, fileType });