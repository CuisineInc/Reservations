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



 ### Create / POST - create a new item

- Request
  - `/api/restaurants/:id/reservations`

- Summary of Request:
  - add a reservation to a reservation

- SAMPLE Input Request:
```javascript
    {
      user_id: Number,
      dateTime: DateTime,
      seatAmount: Number
      restaurant_id: Number
    }
  ```


 ### Update / PUT - update an item

- Request
  -`/api/restaurants/:id/reservations/:id`

- Summary of Request:
  - updates a specific reservation

- SAMPLE input request:

```javascript
    {
      booking_id: Number,
      user_id: Number,
      dateTime: DateTime,
      seatAmount: Number
      restaurant_id: Number
    }
```


 ### Delete / DELETE - delete an item

- Request
 `/api/restaurants/:id/reservations/:id`

- Summary of Request
  - deletes a specific reservation



