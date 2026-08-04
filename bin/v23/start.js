import hookFolder from "./hookFolder/start.js";
import alterFile from "./alterFile/start.js";

const startFunc = ({ inValue, temporaryValue, OutValue,
    inFileType, jsFilePath, inTargetPath, alterArray }) => {

    let fromInternal;
    let fromAlterFile;

    if (inValue && temporaryValue && OutValue) {
        fromInternal = hookFolder({
            inValue, temporaryValue, OutValue,
            inFileType, inTargetPath
        });
    };

    fromAlterFile = alterFile({ alterArray, inFileType, inTargetPath });

    return { fromInternal, fromAlterFile };
};

export default startFunc;