DROP KEYSPACE restaurantdata;

CREATE KEYSPACE restaurantdata WITH replication = {'class': 'SimpleStrategy', 'replication_factor': '3'}  AND durable_writes = true;

CREATE TABLE restaurantdata.restaurants (
  id int,
  restaurant_name TEXT,
  seat_capacity int,
  PRIMARY KEY (id, restaurant_name, seat_capacity)
);



CREATE TABLE restaurantdata.users (
  id int,
  first_name TEXT,
  last_name TEXT,
  PRIMARY KEY (id, first_name, last_name)
);


CREATE TABLE restaurantdata.tables (
  id int,
  table_size int,
  restaurant_id int,
  PRIMARY KEY (id, table_size, restaurant_id)
);



CREATE TABLE restaurantdata.bookings (
  id  int,
  date_time TEXT,
  party_size int,
  restaurant_id int,
  users_id int,
  tables_id int,
  PRIMARY KEY (id, date_time, party_size, restaurant_id, users_id, tables_id)
);

COPY restaurantdata.restaurants (id, restaurant_name, seat_capacity) FROM '/mnt/c/users/rklin/hrsf122/reservations/database/restaurantTableData.csv' WITH DELIMITER=',' AND HEADER=TRUE;
COPY restaurantdata.users (id, first_name, last_name) FROM '/mnt/c/users/rklin/hrsf122/reservations/database/userTableData.csv' WITH DELIMITER=',' AND HEADER=TRUE;
COPY restaurantdata.tables(id, table_size, restaurant_id) FROM '/mnt/c/users/rklin/hrsf122/reservations/database/tablesTableData.csv' WITH DELIMITER=',' AND HEADER=TRUE;
COPY restaurantdata.bookings (id, date_time, party_size, restaurant_id, users_id, tables_id) FROM '/mnt/c/users/rklin/hrsf122/reservations/database/bookingsTableData.csv' WITH DELIMITER=',' AND HEADER=TRUE;