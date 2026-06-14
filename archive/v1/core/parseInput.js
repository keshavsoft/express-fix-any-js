export default function parseInput({ endPointsJsPath, actionName,
    inCheckLines = {}, showLog }) {

    const [...args] = process.argv.slice(2);

    return {
        actionName: args[0] || actionName,
        showLog: args[1] === undefined
            ? showLog
            : args[1] === "true",
        endPointsJsPath: endPointsJsPath || process.cwd(),
        inCheckLines
    };
};