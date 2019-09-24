const cassandra = require('cassandra-driver');
const client = new cassandra.Client({ contactPoints: ['127.0.0.1'], localDataCenter: 'datacenter1', keyspace: 'restaurantdata' });
const fs = require('fs')



const insertRestaurantTable = function (){

    client.execute("COPY restaurantdata.restaurants (id, restaurant_name, seat_capacity) FROM '/mnt/c/users/rklin/hrsf122/reservations/database/restaurantTableData.csv' WITH DELIMITER=',' AND HEADER=TRUE", [], {prepare: true})
      .then(result => console.log('done'))
      .catch(err => console.log(err))
}


const insertUsersTable = function (){

  client.execute("COPY restaurantdata.users (id, first_name, last_name) FROM '/mnt/c/users/rklin/hrsf122/reservations/database/userTableData.csv' WITH DELIMITER=',' AND HEADER=TRUE", [], {prepare: true})
    .then(result => console.log(result))
    .catch(err => console.log(err))
}

const insertTablesTable = function (){
  client.execute("COPY restaurantdata.tables(id, table_size, restaurant_id) FROM '/mnt/c/users/rklin/hrsf122/reservations/database/tablesTableData.csv' WITH DELIMITER=',' AND HEADER=TRUE", [], {prepare: true})
    .then(result => console.log(result))
    .catch(err => console.log(err))
}

const insertBookingsTable = function (){
  client.execute("COPY restaurantdata.bookings (id, date_time, party_size, restaurant_id, users_id, tables_id) FROM '/mnt/c/users/rklin/hrsf122/reservations/database/restaurantTableData.csv' WITH DELIMITER=',' AND HEADER=TRUE", [], {prepare: true})
    .then(result => console.log(result))
    .catch(err => console.log(err))

}

COPY restaurantdata.restaurants (id, restaurant_name, seat_capacity) FROM '/mnt/c/users/rklin/hrsf122/reservations/database/restaurantTableData.csv' WITH DELIMITER=',' AND HEADER=TRUE;
COPY restaurantdata.users (id, first_name, last_name) FROM '/mnt/c/users/rklin/hrsf122/reservations/database/userTableData.csv' WITH DELIMITER=',' AND HEADER=TRUE;
COPY restaurantdata.tables(id, table_size, restaurant_id) FROM '/mnt/c/users/rklin/hrsf122/reservations/database/tablesTableData.csv' WITH DELIMITER=',' AND HEADER=TRUE;
COPY restaurantdata.bookings (id, date_time, party_size, restaurant_id, users_id, tables_id) FROM '/mnt/c/users/rklin/hrsf122/reservations/database/restaurantTableData.csv' WITH DELIMITER=',' AND HEADER=TRUE;

insertTablesTable()
insertUsersTable()
insertBookingsTable()
insertRestaurantTable()

