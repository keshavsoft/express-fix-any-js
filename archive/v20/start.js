import hookFolder from "./hookFolder/start.js";

const startFunc = (args) => {
    let fromInternal;

    fromInternal = hookFolder(args);

    return fromInternal;
};

export default startFunc;