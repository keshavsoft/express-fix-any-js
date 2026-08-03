import fs from "fs";

import defaultFunc from 'pattern-collector-anyjs-story';
import insertImportLine from "./insertImportLine.js";

const startFunc = ({ inFolderNameToInsert, inFileType, inJsPath }) => {
    try {

        const folderNameToInsert = inFolderNameToInsert;
        const localJsPath = inJsPath;

        const fileContent = fs.readFileSync(localJsPath, 'utf8');

        const story = defaultFunc({
            fileContent,
            fileType: inFileType
        });

        insertImportLine({
            inStory: story,
            fileContent, extractRegex: story?.extractRegex,
            filePath: localJsPath, inFolderNameToInsert: folderNameToInsert,
            inTemplate1: story.regexForPullLinesStory.importRegex.reverseTemplate,
            inTemplate: story.reverseTemplates.importRegex,
            inParts: [`${story.variablesConnection}${folderNameToInsert}`, folderNameToInsert],
            fileType: inFileType
        });

    } catch (error) {
        console.log("error : ", error);

    };
};

export default startFunc;

// startFunc({ folderNameToInsert, fileType });