import fs from "fs";

import defaultFunc from 'pattern-collector-anyjs-story';
import insertImportLine from "./insertImportLine.js";

const startFunc = ({ inFolderNameToInsert, inFileType, inJsPath }) => {
    const folderNameToInsert = inFolderNameToInsert;
    const localJsPath = inJsPath;

    const fileContent = fs.readFileSync(localJsPath, 'utf8');

    const story = defaultFunc({
        fileContent,
        fileType: inFileType
    });

    insertImportLine({
        inStory: story,
        fileContent,
        filePath: localJsPath, inFolderNameToInsert: folderNameToInsert,
        inTemplate1: story.regexForPullLinesStory.importRegex.reverseTemplate,
        inTemplate: story.reverseTemplates.importRegex,
        inParts: [`${story.variablesConnection}${folderNameToInsert}`, folderNameToInsert]
    });

};

export default startFunc;

// startFunc({ folderNameToInsert, fileType });