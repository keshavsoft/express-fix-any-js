import fs from "fs";
import path from "path";

import fileNamesJson from '../fileNames.json' with {type: 'json'};

const startFunc = ({ alterArray, inFileType, inTargetPath
}) => {

    try {
        if (!inFileType in fileNamesJson) {
            return false;
        };

        if (!"hookTo" in fileNamesJson[inFileType]) {
            return false;
        };

        if (!"fileName" in fileNamesJson[fileNamesJson[hookTo]]) {
            return false;
        };

        const jsFileName = fileNamesJson[fileNamesJson[hookTo]]?.fileName;

        const localJsPath = path.join(inTargetPath, jsFileName);

        let fileContent = fs.readFileSync(localJsPath, 'utf8');

        alterArray.forEach(element => {
            fileContent = fileContent.replaceAll(element.key, element.value);
        });

        fs.writeFileSync(localJsPath, fileContent);

        return true;

    } catch (error) {
        console.log("error : ", error);

    };
};

export default startFunc;