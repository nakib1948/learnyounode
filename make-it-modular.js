const mymodule = require('./mymodule');

const dirPath = process.argv[2];
const fileExt = process.argv[3];

mymodule(dirPath, fileExt, (err, files) => {
  if (err) {
    console.error(err);
    return;
  }

  files.forEach((file) => {
    console.log(file);
  });
});
