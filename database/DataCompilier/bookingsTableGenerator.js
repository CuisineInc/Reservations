const faker = require('faker');
const fs = require("fs");

//random number generator
const getRandomInt = function(max) {
  return Math.floor(Math.random() * Math.floor(max) ) + 1;
}

// booking generator
const bookingsGenerator = function () {
  // create a counter and set it to 1
  let counter = 0;
  var wstream = fs.createWriteStream('bookingsTableData.csv');
  // create a while loop that ends once it goes over 100 (for now)
  while (counter <= 50000000){
    var id = counter
    if (counter === 10000000 || counter === 20000000 || counter === 30000000 || counter === 40000000 || counter === 50000000 || counter === 60000000 || counter === 70000000 || counter === 80000000 || counter === 90000000){
      console.log(counter)
    }
    // create a property called date_time and set it to a randdomzid date/time in the future
    var date_time = faker.date.future();
    // create a property called tables_id and set it to tablesArr[randomTableIndex].id
    var tables_id = getRandomInt(40000000)
    // create a  property called party_size and set it to tablesArr[randomTableIndex].table_size
    var party_size = getRandomInt(50)
    // create a property called restaurant_id and set it to tablesArr[randomTableIndex].restaurant_id
    var restaurant_id =  getRandomInt(10000000)
    // create a property called user_id and set it to userArray[randomUserIndex]
    var users_id =  getRandomInt(10000000)
    wstream.write(`${id}, "${date_time}",${party_size},${restaurant_id},${users_id},${tables_id}\n`, 'utf8');
    counter++
  }
  // return bookingsArray
  console.log('finished with bookings')
}

bookingsGenerator()