const fs = require("fs");
const path = require("path");

// 👉 Change this to your folder path
const folderPath = path.join(__dirname, "public/gallery");

const files = fs.readdirSync(folderPath);

let count = 1;

files.forEach((file) => {
  const oldPath = path.join(folderPath, file);

  // Skip folders
  if (fs.lstatSync(oldPath).isFile()) {
    const ext = path.extname(file); // keep original extension

    const newName = `gallery${count}${ext}`;
    const newPath = path.join(folderPath, newName);

    fs.renameSync(oldPath, newPath);
    console.log(`${file} → ${newName}`);

    count++;
  }
});

console.log("✅ Renaming completed!");