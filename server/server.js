require('newrelic');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const compression = require('compression');


const app = express();
const port = 3002;
// const database = require('../database/database.js');
const postgres = require('../database/postgresDatabase.js');

app.use(cors());
app.use(morgan());
app.use(compression());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use('/:id/reservations', express.static('public'));

app.use(express.static('public'));

//Get all reservations for a restaurant
app.get('/api/restaurants/:id/reservations', (req, res) =>{
  postgres.getAllReservationsForRestaurant(req, (err, data) => {
    if (err){
      console.log(err)
    } else {
      res.send(data)
    }
  })

});

// //Create a reservation for a restaurant
app.post('/api/restaurants/:id/reservations', postgres.createReservation);

// //Update a reservation for a restaurant
app.put('/api/restaurants/:id/reservations/:id', postgres.updateReservation);

// //delete a reservation from a restaurant
app.delete('/api/:id/reservations/:id', postgres.deleteReservation);


app.listen(port, () => {console.log(`argh matey we be arriving at port ${port}`)});