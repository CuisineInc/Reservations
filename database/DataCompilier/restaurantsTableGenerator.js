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
    if (counter === 1000000 || counter === 2000000 || counter === 3000000 || counter === 4000000 || counter === 5000000 || counter === 6000000 || counter === 7000000 || counter === 8000000 || counter === 9000000){
      console.log(counter)
    }
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


restaurantGenerator()