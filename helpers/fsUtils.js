const fs = require('fs');
const util = require('util');



const readFromFile = util.promisify(fs.readFile);
/**
 *  @param {string} destination 
 *  @param {object} content 
 *  @returns {void} 
 */
const writeToFile = (destination, content) =>
  fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
    err ? console.error(err) : console.info(`\nData written to ${destination}`)
  );
/**
 *  @param {object} content 
 *  @param {string} file 
 *  @returns {void} 
 */
const readAndAppend = (content, file) => {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
    } else {
      const parsedData = JSON.parse(data);
      parsedData.push(content);
      writeToFile(file, parsedData);
    }
  });
};

const deleteItem = (id,file) => {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
    } else {
      const parsedData = JSON.parse(data);
      let result= parsedData.filter((element) => { return element.note_id !== id });
      writeToFile(file, result);
    }
  })    
}

module.exports = { readFromFile, writeToFile, readAndAppend, deleteItem};
