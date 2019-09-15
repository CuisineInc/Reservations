

DROP TABLE IF EXISTS restaurants;

CREATE TABLE restaurants (
  id int NOT NULL,
  restaurant_name varchar(100) NOT NULL,
  seat_capacity int NOT NULL,
  PRIMARY KEY (ID)
);




DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id INTEGER NOT NULL,
  first_name varchar(100) NOT NULL,
  last_name varchar(100) NOT NULL,
  PRIMARY KEY (ID)
);

DROP TABLE IF EXISTS tables CASCADE;

CREATE TABLE tables (
  id int NOT NULL,
  table_size int NOT NULL,
  restaurant_id int,
  PRIMARY KEY (ID)
);


DROP TABLE IF EXISTS bookings;

CREATE TABLE bookings (
  id  int NOT NULL,
  date_time varchar(100) NOT NULL,
  party_size int NOT NULL,
  restaurant_id int,
  users_id int ,
  tables_id int,
  PRIMARY KEY (ID)
);

