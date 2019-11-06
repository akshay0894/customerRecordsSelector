const  customersData = require('./readingData');
const calculate = require('./distance');
const sort = require('./sorting');

const result = [];
let distance = 0 ; 
const  dublinCoordinates = {
    latitude: '53.339428',
    longitude: '-6.257664'
};

//get the  array of customer records by passing the file name  and store in customerArrray
let customersArray =customersData.exportFileData('Customers _Assignment_Coding Challenge.txt');

// iterating through customerArray so that we can  calculate the distance
for(let customer of customersArray){
  distance = calculate.CalculateDistanceInKm(
               customer.latitude, 
               customer.longitude, 
               dublinCoordinates.latitude, 
               dublinCoordinates.longitude);
  //pushing record in the result if distance is less then 100 km
  if(distance <= 100) {
      result.push({user_id: customer.user_id , name: customer.name});
  }
}
  
//sort the results and display the sorted results
function sortResults(){
 return  sort.sortCustomerRecords(result);
}


module.exports = {
   sortResults
};


