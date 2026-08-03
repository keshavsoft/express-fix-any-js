const startFunc = ({ onlyIndexesValues, extractRegex, presentKey }) => {
    let insertStory = {};

    mainLoop: for (const element of extractRegex?.toInsertIndex?.import) {
        const splitValues = element.split(".");
        const firstValue = splitValues[0];
        const secondValue = splitValues[1];

        if (splitValues.length > 1) {
            if (firstValue in onlyIndexesValues) {
                if (onlyIndexesValues[firstValue]) {
                    if (secondValue in onlyIndexesValues[firstValue]) {
                        insertStory.index = onlyIndexesValues[firstValue][secondValue];

                        if (presentKey in onlyIndexesValues) {
                            if (!onlyIndexesValues[presentKey]) {
                                insertStory.gapBefore = true;
                            };
                        };

                        break mainLoop;
                    };
                };
            };
        } else {
            switch (element) {
                case "first":
                    insertStory.index = 0;

                    break mainLoop;
                    break;

                default:
                    break;
            }
        };
    };

    return insertStory;
};

export default startFunc;