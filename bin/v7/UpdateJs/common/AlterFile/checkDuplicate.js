import { isImportPresent } from "express-check-any-for-import";

const checkUseDuplicate = ({ inContent, inFilePath, inSearchText }) => {
    const cleanText = inSearchText.match(/['"]([^'"]+)['"]/)?.[1] || inSearchText;
    const found = isImportPresent(inContent, cleanText) || inContent.includes(inSearchText);

    return {
        found,
        filePath: inFilePath,
        lineNumber: found ? inContent.split("\n").findIndex(line => line.includes(cleanText)) + 1 : null
    };
};

export default checkUseDuplicate;