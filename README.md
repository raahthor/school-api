# School API

## Description

This API allows adding new schools (data) and retrieving a list of schools sorted by proximity to a user's location. Built with **Node.js**, **Express.js**, and **MySQL**.

## API Endpoints

### 1. `POST /addSchool`
**Description**: Adds a new school to the database.

**Request Body**
```json
{
  "name": "School Name",
  "address": "School Address",
  "latitude": 12.9716,
  "longitude": 77.5946
}
```
### 2. `GET /listSchools`
**Description**: Fetches all schools sorted by proximity to a user's provided latitude and longitude.

**Query Parameters**:

- latitude (float) – User’s latitude.

- longitude (float) – User’s longitude.

**Example Request**:

`GET /listSchools?latitude=12.9716&longitude=77.5946`