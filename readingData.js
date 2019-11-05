const fs = require('fs');
let result = [];


//the function for reading data from json file and return the array of customer records
function exportFileData (filePath) {
   try {
    var data = fs.readFileSync(filePath, 'utf8');
    result=data.trim().split('\n').map(str => JSON.parse(str.trim())); 
   } catch(e) {
    console.log('Error:', e.stack);
   }
 return result;
}

module.exports = { exportFileData };