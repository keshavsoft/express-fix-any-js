import fs from "fs";

import defaultFunc from 'pattern-collector-anyjs-story';
import insertLine from "../insertLine.js";

const startFunc = ({ inFolderNameToInsert, inFileType, inJsPath }) => {
    try {

        const folderNameToInsert = inFolderNameToInsert;
        const localJsPath = inJsPath;

        const fileContent = fs.readFileSync(localJsPath, 'utf8');

        const story = defaultFunc({
            fileContent,
            fileType: inFileType
        });

        insertLine({
            presentKey: "importLines",
            linesStory: story.linesStory,
            onlyIndexesValues: story?.onlyIndexesValues,
            inStory: story,
            fileContent,
            importRegex: story?.extractRegex?.toInsertIndex?.[inFileType]?.import,
            filePath: localJsPath, inFolderNameToInsert: folderNameToInsert,
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