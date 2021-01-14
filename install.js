const path = require('path');
const fs = require('fs');

['ninja-linux','ninja-mac','ninja-win.exe'].forEach((binary) => {
    const binaryPath = path.join(__dirname, 'binaries', binary);
    fs.chmodSync(binaryPath, 0755);
})
