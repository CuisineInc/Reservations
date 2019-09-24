const faker = require('faker');
const fs = require("fs");


//random number generator
const getRandomInt = function(max) {
  return Math.floor(Math.random() * Math.floor(max) ) + 1;
}

// restaurant generator
const restaurantGenerator = function () {
  // create a counter and set it to 1
  let counter = 0;
  var wstream = fs.createWriteStream('restaurantTableData.csv');
  // create a while loop that ends at 100 (for now)
  while (counter <= 10000000){
    // create a property called id and set it to counter
    var id = counter;
    // create property to that obj called restaurant name that randomly genrates a restaurant name
    var restaurant_name = faker.company.companyName();
    // create property to that obj called that randomly generates a seat capacity
    var seat_capacity = getRandomInt(300);
    wstream.write(`${id},"${restaurant_name}",${seat_capacity}\n`, 'utf8');
    // add one to counter
    counter++
  }
  console.log('finished with restaruants')
}

// user generator
const userGenerator = function () {
  // create a counter and set it to 1
  let counter = 0
  var wstream = fs.createWriteStream('userTableData.csv');
  //create a while loop that ends at 100 (for now)
  while (counter <= 1000000){
    // create a property called id and set it to counter
    var id = counter
    // create a  property to that obj called first_name that randomly generates a first name
    var first_name = faker.name.firstName()
    // create a property to that obj called last_name that randomy generater a last name
    var last_name = faker.name.lastName()
    wstream.write(`${id},"${first_name}", "${last_name}"\n`, 'utf8');
    // add one to counter
    counter++
  }
  // return userArray
  console.log('finished with users')
}

// generate an array of resturants and set to var called restArr
restaurantGenerator()


//tables generator
const tablesGenerator = function(){

  var wstream = fs.createWriteStream('tablesTableData.csv');
  // look through restArr
  for (let i = 0; i < 40000000; i++){
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

// generate an array of users and set to var called userArr
userGenerator()
// generate an array of tables and set to var called tablesArr
tablesGenerator()


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

// generate an array of bookings and set to var called bookingsArr
bookingsGenerator();