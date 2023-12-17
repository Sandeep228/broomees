# How to start guide?

1. Install dependencies:
```
npm install
```

2. Start the code:
```
npm start
```

# Endpoints Documentation

This documentation provides information about the user structure required for each endpoint.

## 1. POST: /register

**Description:**
Add a new user to the user list.

**Request Payload:**

```json
{
    "name": "er",
    "email": "rt@gmail.com",
    "username":"rt",
    "password":"we1234567@"
  }
```

**Response Body:**
```json
{
    "name": "er",
    "email": "rt@gmail.com",
    "username": "rt",
    "password": "we1234567@",
    "_id": "657ed8266eb9b62ca393f126",
    "createdAt": "2023-12-17T11:14:46.309Z",
    "updatedAt": "2023-12-17T11:14:46.309Z",
    "__v": 0
}

```


## 2. GET: /
**Description:**
Get user list.

**Response Body:**
```json
[
    {
        "_id": "657ec167a01317d062983e0b",
        "name": "Specialist",
        "email": "sd769113@gmail.com",
        "username": "sdsd",
        "password": "12345Er",
        "createdAt": "2023-12-17T09:37:43.044Z",
        "updatedAt": "2023-12-17T09:37:43.044Z",
        "__v": 0
    }
]
```

