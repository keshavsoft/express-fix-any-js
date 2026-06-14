import updateAppJs from "./UpdateAppJs/index.js";

export default ({ actionName, endPointsJsPath, inCheckLines, showLog }) => {
    const localToPath = endPointsJsPath;

    const fromUpdate = updateAppJs({
        inEndPointsJsPath: `${localToPath}/end-points.js`,
        actionName,
        inCheckLines,
        showLog
    });

    return true;
};