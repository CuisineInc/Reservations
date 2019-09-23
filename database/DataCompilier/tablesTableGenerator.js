const fs = require("fs");

//random number generator
const getRandomInt = function(max) {
  return Math.floor(Math.random() * Math.floor(max) ) + 1;
}

const tablesGenerator = function(){

  var wstream = fs.createWriteStream('tablesTableData.csv');
  // look through restArr
  for (let i = 0; i < 40000000; i++){
    if (counter === 5000000 || counter === 10000000 || counter === 15000000 || counter === 20000000 || counter === 25000000 || counter === 30000000 || counter === 35000000 || counter === 40000000){
      console.log(counter)
    }
    // create a property called id and set it to counter
    var id = i;
    // create a property called table size that is a randomly generated number from seatCapacity
    var table_size = getRandomInt(50);
    // create a property caled restaurant_id that that is the current resturants id
    var restaurant_id = getRandomInt(10000000);
    // add one to count
    wstream.write(`${id},${table_size},${restaurant_id}\n`, 'utf8');
    }
   wstream.end()
   console.log('finished with tables')
}

tablesGenerator()