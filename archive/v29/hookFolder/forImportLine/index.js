import fs from "fs";

import defaultFunc from 'pattern-collector-anyjs-story';

import insertLine from "../insertLine/index.js";

const startFunc = ({ inParts, inFileType, inJsPath,
    presentKey, regexKey, templateKey, inConsiderKey
}) => {
    try {
        const fileContent = fs.readFileSync(inJsPath, 'utf8');

        const story = defaultFunc({ fileContent, fileType: inFileType });

        const fromInsertLine = insertLine({
            presentKey,
            linesStory: story.linesStory,
            onlyIndexesValues: story?.onlyIndexesValues,
            fileContent,
            importRegex: story?.extractRegex?.toInsertIndex?.[inFileType]?.[regexKey],
            filePath: localJsPath,
            inTemplate: story?.reverseTemplates?.[templateKey],
            inParts, inConsiderKey
        });

        return fromInsertLine;

    } catch (error) {
        console.log("error : ", error);

    };
};

export default startFunc;