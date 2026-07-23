const startFunc = ({
    content,
    insertInfo,
    toInsertLine,
    insertAfter
}) => {

    // let before;

    // if (insertInfo.index === -1) {
    //     before = 0;

    // } else {

    //     before = content.slice(0, insertInfo.index);

    // };
    // const before = content.slice(0, insertInfo.index);

    const index = insertInfo.index === -1 ? 0 : insertInfo.index;
    const before = content.slice(0, index);

    const isFirstInsert =
        insertInfo.matchedPattern === insertAfter[insertAfter.length - 1];

    if (Array.isArray(toInsertLine)) {
        return before +
            (isFirstInsert ? "\n" : "") +
            toInsertLine.join("\n") +
            "\n" +
            content.slice(index);
    }

    return before +
        (isFirstInsert ? "\n" : "") +
        toInsertLine +
        "\n" +
        content.slice(index);
};

export default startFunc;