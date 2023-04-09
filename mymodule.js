const fs = require('fs');
const path = require('path');

module.exports = function (dirPath, fileExt, callback) {
  fs.readdir(dirPath, (err, files) => {
    if (err) {
      return callback(err);
    }

    const filteredFiles = files.filter((file) => {
      return path.extname(file) === '.' + fileExt;
    });

    return callback(null, filteredFiles);
  });
};
