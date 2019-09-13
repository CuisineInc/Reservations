const cassandra = require('cassandra-driver');

const client = new cassandra.Client({ contactPoints: ['127.0.0.1'], localDataCenter: 'datacenter1', keyspace: 'restaurantdata' });

const faker = require('faker');
const { Pool, Client } = require('pg')

//random number generator
const getRandomInt = function(max) {
  return Math.floor(Math.random() * Math.floor(max) ) + 1;
}

// restaurant generator
const restaurantGenerator = function () {
  // create an array called restaurantArray
  let restaurantArray = [];
  // create a counter and set it to 1
  let counter = 1;
  // create a while loop that ends at 100 (for now)
  while (counter <= 500000){
    // create an empty object
    let restaurantObj = {}
    // create a property called id and set it to counter
    restaurantObj.id = counter;
    // create property to that obj called restaurant name that randomly genrates a restaurant name
    restaurantObj.restaurant_name = faker.company.companyName();
    // create property to that obj called that randomly generates a seat capacity
    restaurantObj.seat_capacity = getRandomInt(300);
    // add object to the array
    restaurantArray.push(restaurantObj);
    // add one to counter
    counter++
  }
  // return array
  return restaurantArray
}

// user generator
const userGenerator = function () {
  // create an array called userArray
  let userArray = [];
  // create a counter and set it to 1
  let counter = 1
  //create a while loop that ends at 100 (for now)
  while (counter <= 500000){
    // create an empty object
    let userObj = {};
    // create a property called id and set it to counter
    userObj.id = counter
    // create a  property to that obj called first_name that randomly generates a first name
    userObj.first_name = faker.name.firstName()
    // create a property to that obj called last_name that randomy generater a last name
    userObj.last_name = faker.name.lastName()
    // push object into the userArray
    userArray.push(userObj)
    // add one to counter
    counter++
  }
  // return userArray
  return userArray
}

// generate an array of resturants and set to var called restArr
const restArr = restaurantGenerator()


//tables generator
const tablesGenerator = function(){
  //create an array called tablesArray
  let tablesArray = [];
  let tableIdCounter = 1
  // look through restArr
  for (let i = 0; i < restArr.length; i++){
    // create a counter and set it to 1
    let breakCounter = 1
    // create a var called seat capacity and set it to the cureent indexed element's seat capacity
    let seatCapacity = restArr[i].seat_capacity
    // create a while loop that ends at the amount seatCapacity
    while (breakCounter <= seatCapacity){
      // create an obj
      let tableObj = {};
      // create a property called id and set it to counter
      tableObj.id = tableIdCounter;
      // create a property called table size that is a randomly generated number from seatCapacity
      tableObj.table_size = getRandomInt(50);
      // subtrack the table size from the seat capacity
      seatCapacity -= tableObj.table_size;
      // create a property caled restaurant_id that that is the current resturants id
      tableObj.restaurant_id = restArr[i].id;
      // add obj to the tablesArray
      tablesArray.push(tableObj);
      // add one to count
      breakCounter++
      tableIdCounter++
    }
  }
  // return tablesArray
  return tablesArray
}

// generate an array of users and set to var called userArr
const userArr = userGenerator()
// generate an array of tables and set to var called tablesArr
const tablesArr = tablesGenerator()


// booking generator
const bookingsGenerator = function () {
  // create an array called bookingsArray
  let bookingsArray = [];
  // create a counter and set it to 1
  let counter = 1;
  // create a while loop that ends once it goes over 100 (for now)
  while (counter <= 500000){
    // create an obj
    let bookingObj = {};
    // create a property called id and set it to counter
    bookingObj.id = counter;
    // create a property called date_time and set it to a randdomzid date/time in the future
    bookingObj.date_time = faker.date.future();
    // create a var called randomTableIndex that generates a random index based on the length of the tablesArr
    let randomTableIndex = getRandomInt(tablesArr.length - 1);
    // create a property called tables_id and set it to tablesArr[randomTableIndex].id
    bookingObj.tables_id = tablesArr[randomTableIndex].id;
    // create a  property called party_size and set it to tablesArr[randomTableIndex].table_size
    bookingObj.party_size = tablesArr[randomTableIndex].table_size;
    // create a property called restaurant_id and set it to tablesArr[randomTableIndex].restaurant_id
    bookingObj.restaurant_id = tablesArr[randomTableIndex].restaurant_id;
    // create a var called randomUserIndex that generates a random index based on the length of the tablesArr
    let randomUserIndex = getRandomInt(userArr.length - 1);
    // create a property called user_id and set it to userArray[randomUserIndex]
    bookingObj.users_id =  userArr[randomUserIndex].id
    console.log(bookingObj.users_id)
    // add obj to bookingsArray
    bookingsArray.push(bookingObj)
    counter++
  }
  // return bookingsArray
  return bookingsArray
}

// generate an array of bookings and set to var called bookingsArr
const bookingsArr = bookingsGenerator();


const insertRestaurantTable = function (){
  for (let i = 0; i < restArr.length; i++){
    let query = `INSERT INTO restaurants(id, restaurant_name, seat_capacity) VALUES ( ?, ?, ?)`
    let params = [restArr[i].id, restArr[i].restaurant_name, restArr[i].seat_capacity]
    client.execute(query, params, {prepare: true})
      .then(result => console.log(result))
      .catch(err => console.log(err))
  }
}

const insertUsersTable = function (){
  for (let i = 0; i < userArr.length; i++){
    let query = `INSERT INTO users(id, first_name, last_name) VALUES( ?, ?, ?)`
    let params = [userArr[i].id, userArr[i].first_name, userArr[i].last_name]
    client.execute(query, params, {prepare: true})
      .then(result => console.log(result))
      .catch(err => console.log(err))
  }
}

const insertTablesTable = function (){
  for (let i = 0; i < restArr.length; i++){
    let query = `INSERT INTO tables(id, table_size, restaurant_id) VALUES( ?, ?, ?)`
    let params = [tablesArr[i].id, tablesArr[i].table_size, tablesArr[i].restaurant_id]
    client.execute(query, params, {prepare: true})
      .then(result => console.log(result))
      .catch(err => console.log(err))
  }
}

const insertBookingsTable = function (){
  for (let i = 0; i < bookingsArr.length; i++){
    let query = `INSERT INTO bookings(id, date_time, party_size, restaurant_id, users_id, tables_id) VALUES( ?, ?, ?, ?, ?, ?)`
    let params = [bookingsArr[i].id, `"${bookingsArr[i].date_time}"`, bookingsArr[i].party_size, bookingsArr[i].restaurant_id, bookingsArr[i].users_id, bookingsArr[i].tables_id]
 
    client.execute(query, params, {prepare: true})
      .then(result => console.log(result))
      .catch(err => console.log(err))
  }
}


insertTablesTable()
insertUsersTable()
insertBookingsTable()
insertRestaurantTable()

