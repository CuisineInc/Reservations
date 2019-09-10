# Project Name

Llaminati's Restaurant Reservation System

## Related Projects

  - https://github.com/llaminati/Banner-Gallery
  - https://github.com/llaminati/Menu
  - https://github.com/llaminati/Reservations
  - https://github.com/llaminati/Reviews

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage



## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

### Support CRUD from your API


- Extend the existing API to support all CRUD operations. This should be done with the inherited DBMS:
- Be sure to select the appropriate routes for each of these actions so they conform to the REST standard.
  
 ### Read / GET - read an item
- Required Input Parameters for Request:
  1. api
  2. id
  3. reservations

- Request:
  - '/api/:id/reservations'
 
- Summary of Request:
  - Gets all reservations of one listing

- SAMPLE Output Response: 


{
  Listing: L1,
  Dates: [
   {
      SeatNumber: Number,
      Hours: String,
      Date: String,
      Seats: [
        {
          Time: String,
          Reservations: {
            Open: Number,
            Reserved: Number 
          }
        }
      ]
    }
  ]
}

- Status Code 
  - 200
 
 
 ### Create / POST - create a new item
- Required Input Parameters for Request

- Request
 '/api/:id/reservations'
 
- Summary of Request

- SAMPLE Output Response: 
 
 
 ### Update / PUT - update an item
- Required Input Parameters for Request

- Request
 '/api/:id/reservations'
 
- Summary of Request

- SAMPLE Output Response: 
 
 ### Delete / DELETE - delete an item
 - Required Input Parameters for Request

- Request
 '/api/:id/reservations'
 
- Summary of Request

- SAMPLE Output Response: 
 

