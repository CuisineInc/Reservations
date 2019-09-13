


CREATE TABLE restaurants (
  id INTEGER NOT NULL,
  restaurant_name varchar(50) NOT NULL,
  seat_capacity smallint NOT NULL,
  PRIMARY KEY (ID)
);






CREATE TABLE users (
  id INTEGER NOT NULL,
  first_name varchar(50) NOT NULL,
  last_name varchar(50) NOT NULL,
  PRIMARY KEY (ID)
);


CREATE TABLE tables (
  id int NOT NULL,
  table_size smallint NOT NULL,
  restaurant_id INTEGER REFERENCES restaurants(id),
  PRIMARY KEY (ID)
);



CREATE TABLE bookings (
  id  INTEGER NOT NULL,
  date_time varchar(50) NOT NULL,
  party_size smallint NOT NULL,
  restaurant_id INTEGER REFERENCES users(id),
  users_id INTEGER REFERENCES users(id),
  tables_id INTEGER REFERENCES tables(id),
  PRIMARY KEY (ID)
);

