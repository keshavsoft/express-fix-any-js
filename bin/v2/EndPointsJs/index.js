import updateJs from "./UpdateJs/index.js";

export default ({ actionName, inJsFilePath, inCheckLines, showLog }) => {
    const fromUpdate = updateJs({
        inJsFilePath,
        actionName,
        inCheckLines,
        showLog
    });

    return true;
};