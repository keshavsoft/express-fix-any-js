import fs from "fs";

import defaultFunc from 'pattern-collector-anyjs-story';
import insertLine from "../insertLine/index.js";

const startFunc = ({ inValueToInsert, inFileType, inJsPath,
    presentKey, regexKey, templateKey
}) => {

    try {
        const folderNameToInsert = inValueToInsert;
        const localJsPath = inJsPath;

        const fileContent = fs.readFileSync(localJsPath, 'utf8');

        const story = defaultFunc({
            fileContent,
            fileType: inFileType
        });

        insertLine({
            presentKey,
            linesStory: story.linesStory,
            onlyIndexesValues: story?.onlyIndexesValues,
            inStory: story,
            fileContent,
            importRegex: story?.extractRegex?.toInsertIndex?.[inFileType]?.[regexKey],
            filePath: localJsPath, inValueToInsert: folderNameToInsert,
            inTemplate: story?.reverseTemplates?.[templateKey],
            inParts: [`${story.variablesConnection}${folderNameToInsert}`, folderNameToInsert],
            fileType: inFileType
        });

    } catch (error) {
        console.log("error : ", error);

    };
};

export default startFunc;

// startFunc({ folderNameToInsert, fileType });