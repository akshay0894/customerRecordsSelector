// function to sort array of objects based on user_id
function sortCustomerRecords(customersArray) {
    for(let i =0; i < customersArray.length;i++) {
        for(let j=0; j< customersArray.length-i-1; j++){
            if(comparator(customersArray[j], customersArray[j+1])>0){
                temp = customersArray[j];
                customersArray[j] = customersArray[j+1];
                customersArray[j+1] = temp;
                
            }
        }
      
     }
     return customersArray;
}

//compare 2 objects users_id 
function comparator(a,b){
    return a.user_id-b.user_id;
}


 module.exports = {
     sortCustomerRecords
 }