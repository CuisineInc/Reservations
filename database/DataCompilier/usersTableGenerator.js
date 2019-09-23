const faker = require('faker');
const fs = require("fs");

// user generator
const userGenerator = function () {
  // create a counter and set it to 1
  let counter = 0
  var wstream = fs.createWriteStream('userTableData.csv');
  //create a while loop that ends at 100 (for now)
  while (counter <= 1000000){
    if (counter === 1000000 || counter === 2000000 || counter === 3000000 || counter === 4000000 || counter === 5000000 || counter === 6000000 || counter === 7000000 || counter === 8000000 || counter === 9000000){
      console.log(counter)
    }
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


userGenerator()