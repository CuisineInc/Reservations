DROP DATABASE IF EXISTS restaurantData;

CREATE DATABASE restaurantData;

USE restaurantData;

CREATE TABLE restaurants (
  id int NOT NULL AUTO_INCREMENT,
  restaurantName varchar(50) NOT NULL,
  seatCapacity int NOT NULL,
  PRIMARY KEY (ID)
);


CREATE TABLE bookings (
  id int NOT NULL AUTO_INCREMENT,
  dateTime dateTime NOT NULL,
  partySize int NOT NULL,
  restaurant_id int,
  users_id int,
  tables_id int,
  PRIMARY KEY (ID)
);


CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  firstName varchar(50) NOT NULL,
  lastName varchar(50) NOT NULL,
  PRIMARY KEY (ID)
);


CREATE TABLE tables (
  id int NOT NULL AUTO_INCREMENT,
  tableSize int NOT NULL,
  restaurant_id int,
  PRIMARY KEY (ID)
);