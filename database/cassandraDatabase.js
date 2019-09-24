const cassandra = require('cassandra-driver');
const client = new cassandra.Client({ contactPoints: ['127.0.0.1'], localDataCenter: 'datacenter1', keyspace: 'restaurantdata' });




exports.getAllReservations = function (req, res){
    client.execute("SELECT * FROM bookings", {prepare: true})
      .then(result => res.send(result))
      .catch(err => console.log(err))
}


exports.getAllReservationsForRestaurant = function(req, res){
  let query = `SELECT * FROM bookings WHERE restaurant_id = ${req.params.id}`
  client.execute(`SELECT * FROM bookings WHERE restaurant_id = ${req.params.id}`,[], {prepare: true})
  .then(result => res.send(result))
  .catch(err => console.log(err))
}

exports.getAllRestaurants = function (req, res){
  let query = "SELECT * FROM restaurants"
  client.execute(query, {prepare: true})
  .then(result => res.send(result))
  .catch(err => console.log(err))
}

var reservationID = 50000000
exports.createReservation = function (req, res){
  reservationID++
  var userID = getRandomInt(10000000)
  var tableID = getRandomInt(40000000)
  let query = `INSERT INTO bookings (id, date_time, party_size, restaurant_id, users_id, tables_id) VALUES (?, ?, ?, ?, ?, ?)`
  let params = [reservationID, req.body.date_time, req.body.party_size, req.params.id, userID, tableID]
  client.execute(query, {prepare: true})
  .then(result => res.sendStatus(201))
  .catch(err => console.log(err))
}

exports.updateReservation = function (req, res){
  let query = "SELECT * FROM restaurants"
  client.query(query,(err, data) => {
    if(err){
      console.log(data)
    } else {
      res.send(data)
    }
    client.end()
  })
}
