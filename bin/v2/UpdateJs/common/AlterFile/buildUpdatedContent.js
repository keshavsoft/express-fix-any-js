const startFunc = ({
    content,
    insertInfo,
    toInsertLine,
    insertAfter
}) => {
    const before = content.slice(0, insertInfo.index);

    const isFirstInsert =
        insertInfo.matchedPattern === insertAfter[insertAfter.length - 1];

    return before +
        (isFirstInsert ? "\n" : "") +
        toInsertLine +
        "\n" +
        content.slice(insertInfo.index);
};

export default startFunc;