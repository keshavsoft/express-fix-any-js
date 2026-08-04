import fs from "fs";
import path from "path";

import fileNamesJson from '../fileNames.json' with {type: 'json'};

const startFunc = ({ alterArray, inFileType, inTargetPath
}) => {

    try {
        const localJsPath = path.join(inTargetPath, fileNamesJson[inFileType]);

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