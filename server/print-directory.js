// print-directory.js
const fs = require('fs');
const path = require('path');

function printDir(dirPath) {
  fs.readdir(dirPath, (err, files) => {
    if (err) throw err;
    files.forEach(file => {
      const fullPath = path.join(dirPath, file);
      fs.stat(fullPath, (err, stats) => {
        if (err) throw err;
        if (stats.isDirectory()) {
          console.log(`Directory: ${fullPath}`);
          printDir(fullPath);
        } else {
          console.log(`File: ${fullPath}`);
        }
      });
    });
  });
}

printDir('/home/ankit-thakur/Desktop/Bulk_Sms/server');
