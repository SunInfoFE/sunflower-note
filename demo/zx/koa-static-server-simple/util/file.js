const fs = require('fs');

/**
 * 读取文件
 * @param {string} 文件的绝对路径
 * @return {string|binary}
 */
function file(filePath) {
  return fs.readFileSync(filePath, 'utf-8');
}

module.exports = file;