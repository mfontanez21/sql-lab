# Sequelize Game API

## The following section provides information on the available endpoints for this API.

### Create a Game

Method: POST

Endpoint: /api/games

Description: This endpoint creates a new game with the provided information in the request body.

Request Body:

{
"name": "string",
"year": integer,
"console": "string"
}

Response:

{
"id": integer,
"name": "string",
"year": integer,
"console": "string",
"createdAt": "timestamp",
"updatedAt": "timestamp"
}

### Get All Games

Method: GET

Endpoint: /api/games

Description: This endpoint retrieves all the games stored in the database.

Response:

[
{
"id": integer,
"name": "string",
"year": integer,
"console": "string",
"createdAt": "timestamp",
"updatedAt": "timestamp"
},
]

### Update a Game

Method: PUT

Endpoint: /api/games/:id

Description: This endpoint updates the game with the specified id using the information in the request body.

Request Body:

{
"name": "string",
"year": integer,
"console": "string"
}

Response:

{
"id": integer,
"name": "string",
"year": integer,
"console": "string",
"createdAt": "timestamp",
"updatedAt": "timestamp"
}

### Delete a Game
Method: DELETE

Endpoint: /api/games/:id

Description: This endpoint deletes the game with the specified id from the database.

Response:

{
"id": integer,
"name": "string",
"year": integer,
"console": "string",
"createdAt": "timestamp",
"updatedAt": "timestamp"
}