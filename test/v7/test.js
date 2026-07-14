import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import index from "../../index.js";
import getLatestVersion from "../../bin/core/getLatestVersion.js";
import checkLines from "./checkLines.json" with { type: "json" };

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const appJsPath = path.join(__dirname, "app.js");
``
const initialAppContent = fs.readFileSync(appJsPath, "utf8");

function resetAppJs() {
    fs.writeFileSync(appJsPath, initialAppContent, "utf8");
}

function runTests() {
    const latestVersion = getLatestVersion();
    console.log(`Starting ${latestVersion} tests...`);

    // Test Case 1: Simple template from checkLines.json
    resetAppJs();
    console.log("\n--- Test Case 1: Simple template ---");
    const checkLinesString = checkLines.simple;

    const output = index({
        showLog: true,
        jsFilePath: appJsPath,
        inCheckLines: checkLinesString
    });

    let result = fs.readFileSync(appJsPath, "utf8");
    if (
        output &&
        output.importResult &&
        output.importResult.found === false &&
        output.useResult &&
        output.useResult.found === false &&
        result.includes("import funcFrom${folderName} from './${folderName}/controller.js';") &&
        result.includes("router.get('/${endpoint}'")
    ) {
        console.log("✅ Test Case 1 Passed: Simple template inserted correctly and output is correct.");
    } else {
        console.error("❌ Test Case 1 Failed: Simple template insertion failed or output incorrect.");
        console.error("Returned output was:", output);
        process.exit(1);
    }

    console.log("\nAll tests completed successfully!");
}

runTests();
