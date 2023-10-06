# Flight and Search Microservice

This repository contains the Flight and Search microservice, which provides APIs for managing cities, airports, and flights. This README.md file serves as documentation for this microservice, explaining the available routes and their corresponding functionalities.

## Table of Contents

- [Routes](#routes)
  - [City Routes](#city-routes)
  - [Airport Routes](#airport-routes)
  - [Flight Routes](#flight-routes)
- [Usage](#usage)
- [Installation](#installation)
- [Contributing](#contributing)
- [License](#license)

## Routes

### City Routes

#### Create a City
- **Route**: POST /city
- **Controller**: CityController.create
- **Description**: Creates a new city.

#### Delete a City
- **Route**: DELETE /city/:id
- **Controller**: CityController.destroy
- **Description**: Deletes a city with the specified ID.

#### Get a City
- **Route**: GET /city/:id
- **Controller**: CityController.get
- **Description**: Retrieves a city by its ID.

#### Update a City
- **Route**: PATCH /city/:id
- **Controller**: CityController.update
- **Description**: Updates the information of a city with the specified ID.

#### Get All Cities
- **Route**: GET /cities
- **Controller**: CityController.getAll
- **Description**: Retrieves a list of all cities.

### Airport Routes

#### Create an Airport
- **Route**: POST /airport
- **Controller**: AirportController.create
- **Description**: Creates a new airport.

#### Delete an Airport
- **Route**: DELETE /airport/:id
- **Controller**: AirportController.destroy
- **Description**: Deletes an airport with the specified ID.

#### Get an Airport
- **Route**: GET /airport/:id
- **Controller**: AirportController.get
- **Description**: Retrieves an airport by its ID.

#### Get All Airports
- **Route**: GET /airport
- **Controller**: AirportController.getAll
- **Description**: Retrieves a list of all airports.

#### Update an Airport
- **Route**: PATCH /airport/:id
- **Controller**: AirportController.update
- **Description**: Updates the information of an airport with the specified ID.

### Flight Routes

#### Create a Flight
- **Route**: POST /flight
- **Controller**: FlightController.create
- **Description**: Creates a new flight.

#### Get a Flight
- **Route**: GET /flight/:id
- **Controller**: FlightController.get
- **Description**: Retrieves flight information by its ID.

#### Get All Flights
- **Route**: GET /flight
- **Controller**: FlightController.getAll
- **Description**: Retrieves a list of all flights.

#### Update a Flight
- **Route**: PATCH /flight/:id
- **Controller**: FlightController.update
- **Description**: Updates flight information with the specified ID.

#### Delete a Flight
- **Route**: DELETE /flight/:id
- **Controller**: FlightController.destroy
- **Description**: Deletes a flight with the specified ID.

## Usage

To use this microservice, you can make HTTP requests to the provided routes using the appropriate HTTP methods (e.g., POST, GET, PATCH, DELETE) and supply the required data in the request body or parameters. Make sure you have the necessary authorization and authentication mechanisms in place if required.

## Installation

To run this microservice locally or in a production environment, follow these steps:

1. Clone this repository to your local machine.
2. Install the required dependencies using npm or yarn.
3. Configure environment variable if you are running it locally.
```
PORT = 3000
```
4. Start the microservice using the provided start script.

```bash
git clone https://github.com/arvindpndit/Flight-and-search-service.git
cd Flight-and-search-service
npm install
npm start
```
