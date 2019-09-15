
const { Pool, Client } = require('pg')
const fs = require('fs')


const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'restaurantdata',
  password: 'rachel',
  port: 5432,
})
client.connect()

const insertRestaurantTable = function (){
    client.query("COPY restaurants(id, restaurant_name, seat_capacity) FROM '/mnt/c/users/rklin/hrsf122/reservations/database/restaurantTableData.csv' DELIMITER ',' CSV HEADER", (err, res) => {
      console.log(err)
    })
}

const insertUsersTable = function (){
    client.query("COPY users(id, first_name, last_name) FROM '/mnt/c/users/rklin/hrsf122/reservations/database/userTableData.csv' DELIMITER ',' CSV HEADER", (err, res) => {
      console.log(err)
    })
}



const insertTablesTable = function (){
    client.query("COPY tables(id, table_size, restaurant_id) FROM '/mnt/c/users/rklin/hrsf122/reservations/database/tablesTableData.csv' DELIMITER ',' CSV HEADER", (err, res) => {
      console.log(err)
    })
}

const insertBookingsTable = function (){
    client.query("COPY bookings(id, date_time, party_size, restaurant_id, users_id, tables_id) FROM '/mnt/c/users/rklin/hrsf122/reservations/database/bookingsTableData.csv' DELIMITER ',' CSV HEADER", (err, res) => {
      console.log(err)
    })
}



insertTablesTable()
insertUsersTable()
insertBookingsTable()
insertRestaurantTable()



