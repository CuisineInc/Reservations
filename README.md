# Project Name

CuisineInc's Restaurant Reservation System Database System

## Related Projects

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
1. [API](#development)

## Usage



## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0


## Development

### Installing Dependencies
npm install


### API

 ### Read / GET - read an item

- Request:
  - `/api/restaurants/:id/reservations`

- Summary of Request:
  - Gets all reservations of one restaurant

- SAMPLE Output Response:

```javascript
{
  id: Number,
  restaurantName: String,
  seatCapacity: Number,
  bookings:[
    {
      id: Number,
      dateTime: DateTime,
      seatAmount: Number,
    }
  ]
}
```
- Status Code
  - 200


 ### Create / POST - create a new item

- Request
  - `/api/restaurants/:id/reservations/addreservation`

- Summary of Request:
  - add a reservation to a listing

- SAMPLE Input Response:
```javascript
    {
      user_id: Number,
      dateTime: DateTime,
      seatAmount: Number
      restaurant_id: Number
    }
  ```
- Status Code
  - 201

 ### Update / PUT - update an item

- Request
  -`/api/restaurants/:id/reservations/updatereservation`

- Summary of Request:
  - updates a specific reservation

- SAMPLE input Response:

```javascript
    {
      user_id: Number,
      dateTime: DateTime,
      seatAmount: Number
      restaurant_id: Number
    }
```
 - Status Code
  - 200

 ### Delete / DELETE - delete an item

- Request
 `/api/restaurants/:id/reservations/deletereservation`

- Summary of Request
  - deletes a specific reservation

- SAMPLE input Response:
```javascript
    {
      user_id: Number,
      dateTime: DateTime,
      seatAmount: Number
      restaurant_id: Number
    }
 ```
- Status Code
  - 200
