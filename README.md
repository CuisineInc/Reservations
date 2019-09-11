# Project Name

CuisineInc's Restaurant Reservation System Database System

## Related Projects

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
   - api
   - id
   - reservations

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
            Reserved: Number ,
            PeopleReserverd:[
            {
             Id: Number,
             Date: String,
             Time: String,
             PartySize: Number
            }
            ]
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
   - api
   - id
   - reservations
   - addreservation
- Request
  - '/api/:id/reservations/addreservation'
 
- Summary of Request:
  - add a reservation to a listing

- SAMPLE Input Response: 
      -    {
             Date: String,
             Time: String,
             id: Number,
             partySize: Number
            }
- Status Code
  - 201
  
 ### Update / PUT - update an item
- Required Input Parameters for Request
  - api
  - id
  - reservations
  - updatereservation

- Request
  -'/api/:id/reservations/updatereservation'
 
- Summary of Request:
  - updates a specific reservation

- SAMPLE input Response: 
      -    {
             Id: Number,
             Date: String,
             Time: String,
             PartySize: Number
            }
 - Status Code
  - 200
  
 ### Delete / DELETE - delete an item
 - Required Input Parameters for Request
   - api
   - id
   - reservations
   - deletereservation
   
- Request
 '/api/:id/reservations/deletereservation'
 
- Summary of Request
  - deletes a specific reservation

- SAMPLE input Response: 
     -    {
             Id: Number,
             Date: String,
             Time: String,
             PartySize: Number
            }
 
- Status Code
  - 200
