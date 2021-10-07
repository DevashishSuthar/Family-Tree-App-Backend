const fs = require('fs');

const { PUBLIC_DIR, ASSETS_DIR, IMAGES_DIR } = require('../constants/file-directories.constant');

let dir = `./${PUBLIC_DIR}`;
let assetsDir = `${dir}/${ASSETS_DIR}`;
if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
    fs.mkdirSync(`${assetsDir}`);
    fs.mkdirSync(`${assetsDir}/${IMAGES_DIR}`);
}

if (!fs.existsSync(`${assetsDir}`)) {
    fs.mkdirSync(`${assetsDir}`);
    fs.mkdirSync(`${assetsDir}/${IMAGES_DIR}`);
}

if (!fs.existsSync(`${assetsDir}/${IMAGES_DIR}`)) {
    fs.mkdirSync(`${assetsDir}/${IMAGES_DIR}`);
}