
const TARGET_FOLDER = process.argv[2];

if (!TARGET_FOLDER) {
    console.log("The target folder wasn't defined.");
    process.exit(1);
}


const path = require('path');
const fs = require('fs');
const { exec } = require('child_process');

if (!fs.existsSync(TARGET_FOLDER)) {
    console.log("The target folder does not exist.");
    process.exit(2);
}

const FOLDER_FILES = fs.readdirSync(TARGET_FOLDER);

FOLDER_FILES.forEach(fileName => {
    const FILE_PATH = path.join(TARGET_FOLDER, fileName);
    const RESULT_FILE_PATH = FILE_PATH.replace(/^.*.pdf$/, ".webp")
    exec(`magick "${FILE_PATH}" "${RESULT_FILE_PATH}"`);
});