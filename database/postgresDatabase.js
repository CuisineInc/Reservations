const { Pool, Client } = require('pg')

//random number generator
const getRandomInt = function(max) {
  return Math.floor(Math.random() * Math.floor(max) ) + 1;
}

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'restaurantdata',
  password: 'rachel',
  port: 5432,
})

client.connect()
exports.getAllReservations = function(req, res) {
  let query = "SELECT * FROM bookings"
  client.query(query,(err, data) => {
    if(err){
      console.log(data)
    } else {
      res.send(data)
    }
  })
}

exports.getAllReservationsForRestaurant = function(req, res){
  let query = `SELECT * FROM bookings WHERE restaurant_id = ${req.params.id}`
  console.log("here")
  client.query(query,(err, data) => {
    if(err){
      console.log(data)
    } else {
      res.send(data)
    }
  })
}

exports.getAllRestaurants = function (req, res){
  let query = "SELECT * FROM restaurants"
  client.query(query,(err, data) => {
    if(err){
      console.log(data)
    } else {
      res.send(data)
    }

  })
}

var reservationID = 50000000
exports.createReservation = function (req, res){
  reservationID++
  var userID = getRandomInt(10000000)
  var tableID = getRandomInt(40000000)
  let query = `INSERT INTO bookings (id, date_time, party_size, restaurant_id, users_id, tables_id) VALUES (${reservationID}, ${req.body.date_time},${req.body.party_size},${req.params.id},${userID},${tableID})`
  client.query(query,(err, data) => {
    if(err){
      console.log(err)
    } else {
      res.sendStatus(201)
    }
  })
}


exports.updateReservation = function (req, res){
  let query = `UPDATE "bookings" SET date_time = ${req.body.date_time}, party_size = ${req.body.party_size}, restaurant_id = ${req.body.restaurant_id}, users_id = ${req.body.users_id}, tables_id = ${req.body.tables_id}  WHERE id = ${req.params.id}`
  client.query(query,(err, data) => {
    if(err){
      console.log(err)
    } else {
      res.send(data)
    }
  })
}


exports.deleteReservation = function (req, res){
  let query = `DELETE FROM bookings
  WHERE id = ${req.params.id}`
  client.query(query,(err, data) => {
    if(err){
      console.log(data)
    } else {
      res.send(data)
    }
  })
}





