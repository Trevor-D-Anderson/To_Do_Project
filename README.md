# [ToDoIt Documentation](https://github.com/Trevor-D-Anderson/To_Do_Project.git)

## Overview
ToDoIt is meant as a motivational goal tracking app where users can track their own goals, connect with friends and encourage each other through interaction around these goals via likes and comments. This app is written in full stack Javascript using MongoDB, Express, React, and Node (sometimes called MERN) along with a few other supporting libraries listed below.

## Team Information

This app started as a portfolio project made by team members attending Coding Dojo.

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr class="odd">
<td style="text-align: left;"><p><strong>Team Member</strong></p></td>
<td style="text-align: left;"><p><strong>Email</strong></p></td>
</tr>
<tr class="even">
<td style="text-align: left;"><p>Kai Neuhold-Huber, Back-End
Engineer</p></td>
<td style="text-align: left;"><p><a
href="mailto:kneuholdhuber@gmail.com">kneuholdhuber@gmail.com</a></p></td>
</tr>
<tr class="odd">
<td style="text-align: left;"><p>Rene Marino, Back-End Engineer</p></td>
<td style="text-align: left;"><p><a
href="mailto:renemarino93@gmail.com">renemarino93@gmail.com</a></p></td>
</tr>
<tr class="even">
<td style="text-align: left;"><p>Darwin Garcia, Front-End
Engineer</p></td>
<td style="text-align: left;"><p><a
href="mailto:rdgt07@gmail.com">rdgt07@gmail.com</a></p></td>
</tr>
<tr class="odd">
<td style="text-align: left;"><p>Trevor Anderson, Front-End
Engineer</p></td>
<td style="text-align: left;"><p><a
href="mailto:tbone101@gmail.com">tbone101@gmail.com</a></p></td>
</tr>
</tbody>
</table>

## Back-End Routes
*Note: all routes require credentials to be passed with the request.*

## Outline
1. [User Routes](#id-user-routes)
2. [Goal Routes](#id-comment-routes)
3. [Milestone Routes](#id-milestone-routes)
4. [Comment Routes](#id-comment-routes)

<div id="id-user-routes" />

### User

#### *Registration*
POST `localhost:8000/api/users/register`

**Request Body Example:**
```JS
{
    "firstName": "Test",
    "lastName": "Tester",
    "email": "test@me.com",
    "password": "testtest",
    "confirmPassword": "testtest" 
}
```

**Response Example**
```JS
{
    "successMessage": "Thank you for registering",
    "user": {
        "firstName": "Test",
        "lastName": "Tester",
        "email": "test@me.com",
        "password": "$2b$10$1z1vTBumAuMfR08S6HRByOJxSAT8DN1t6IREIDe.rI4Uk71WwCsIm",
        "goals": [],
        "comments": [],
        "_id": "621ea1002cb0729c56171fb0",
        "createdAt": "2022-03-01T22:41:04.675Z",
        "updatedAt": "2022-03-01T22:41:04.675Z",
        "__v": 0
    }
}
```

#### *Login*
POST `localhost:8000/api/users/login`

**Request Body Example:**
```JS
{
    "email": "test@me.com",
    "password": "testtest"
}
```

**Response Example**
```JS
{
    "message": "Successfully logged in",
    "user": {
        "_id": "621ea1002cb0729c56171fb0",
        "firstName": "Test",
        "lastName": "Tester",
        "email": "test@me.com",
        "password": "$2b$10$1z1vTBumAuMfR08S6HRByOJxSAT8DN1t6IREIDe.rI4Uk71WwCsIm",
        "goals": [
            "621ea1d52cb0729c56171fb5"
        ],
        "comments": [
            "621ea3462cb0729c56171fc8",
            "621ea3612cb0729c56171fcd"
        ],
        "createdAt": "2022-03-01T22:41:04.675Z",
        "updatedAt": "2022-03-01T22:51:13.392Z",
        "__v": 0
    }
}
```

#### *Logout*
POST `localhost:8000/api/users/logout`

**Request Body Example:**
```JS
none
```

**Response Example**
```JS
{
    "message": "You have successfully logged out."
}
```

#### *Get Authenticated User*
GET `localhost:8000/api/users/authenticated`

**Request Body Example:**
```JS
none
```

**Response Example**
```JS
{
    "_id": "621ea1002cb0729c56171fb0",
    "firstName": "Test",
    "lastName": "Tester",
    "email": "test@me.com",
    "password": "$2b$10$1z1vTBumAuMfR08S6HRByOJxSAT8DN1t6IREIDe.rI4Uk71WwCsIm",
    "goals": [
        {
            "_id": "621ea1d52cb0729c56171fb5",
            "title": "Document the API",
            "completed": false,
            "comments": [
                "621ea3462cb0729c56171fc8",
                "621ea3612cb0729c56171fcd"
            ],
            "milestones": [
                {
                    "_id": "621ea2df2cb0729c56171fbd",
                    "title": "Test routes to get in/out examples",
                    "description": "tesetsetsestes",
                    "completed": false,
                    "createdBy": "621ea1002cb0729c56171fb0",
                    "associatedGoal": "621ea1d52cb0729c56171fb5",
                    "createdAt": "2022-03-01T22:49:03.843Z",
                    "updatedAt": "2022-03-01T22:49:03.843Z",
                    "__v": 0
                },
                {
                    "_id": "621ea2f12cb0729c56171fc1",
                    "title": "Document routes in readme.md with in/out examples",
                    "description": "tesetsetsestes",
                    "completed": false,
                    "createdBy": "621ea1002cb0729c56171fb0",
                    "associatedGoal": "621ea1d52cb0729c56171fb5",
                    "createdAt": "2022-03-01T22:49:21.633Z",
                    "updatedAt": "2022-03-01T22:49:21.633Z",
                    "__v": 0
                }
            ],
            "createdBy": "621ea1002cb0729c56171fb0",
            "createdAt": "2022-03-01T22:44:37.487Z",
            "updatedAt": "2022-03-01T22:51:13.362Z",
            "__v": 0
        }
    ],
    "comments": [
        "621ea3462cb0729c56171fc8",
        "621ea3612cb0729c56171fcd"
    ],
    "createdAt": "2022-03-01T22:41:04.675Z",
    "updatedAt": "2022-03-01T22:51:13.392Z",
    "__v": 0
}
```

#### *Get User by ID*
GET `localhost:8000/api/users/id/621ea1002cb0729c56171fb0`

**Request Body Example:**
```JS
none
```

**Response Example**
```JS
{
    "_id": "621ea1002cb0729c56171fb0",
    "firstName": "Test",
    "lastName": "Tester",
    "email": "test@me.com",
    "password": "$2b$10$1z1vTBumAuMfR08S6HRByOJxSAT8DN1t6IREIDe.rI4Uk71WwCsIm",
    "goals": [
        {
            "_id": "621ea1d52cb0729c56171fb5",
            "title": "Document the API",
            "completed": false,
            "comments": [
                "621ea3462cb0729c56171fc8",
                "621ea3612cb0729c56171fcd"
            ],
            "milestones": [
                {
                    "_id": "621ea2df2cb0729c56171fbd",
                    "title": "Test routes to get in/out examples",
                    "description": "tesetsetsestes",
                    "completed": false,
                    "createdBy": "621ea1002cb0729c56171fb0",
                    "associatedGoal": "621ea1d52cb0729c56171fb5",
                    "createdAt": "2022-03-01T22:49:03.843Z",
                    "updatedAt": "2022-03-01T22:49:03.843Z",
                    "__v": 0
                },
                {
                    "_id": "621ea2f12cb0729c56171fc1",
                    "title": "Document routes in readme.md with in/out examples",
                    "description": "tesetsetsestes",
                    "completed": false,
                    "createdBy": "621ea1002cb0729c56171fb0",
                    "associatedGoal": "621ea1d52cb0729c56171fb5",
                    "createdAt": "2022-03-01T22:49:21.633Z",
                    "updatedAt": "2022-03-01T22:49:21.633Z",
                    "__v": 0
                }
            ],
            "createdBy": "621ea1002cb0729c56171fb0",
            "createdAt": "2022-03-01T22:44:37.487Z",
            "updatedAt": "2022-03-01T22:51:13.362Z",
            "__v": 0
        }
    ],
    "comments": [
        "621ea3462cb0729c56171fc8",
        "621ea3612cb0729c56171fcd"
    ],
    "createdAt": "2022-03-01T22:41:04.675Z",
    "updatedAt": "2022-03-01T22:51:13.392Z",
    "__v": 0
}
```

#### *Update User by ID*
PUT `localhost:8000/api/users/id/621ea1002cb0729c56171fb0`

**Request Body Example:**
```JS
{
    "lastName": "Testerly"
}
```

**Response Example**
```JS
{
    "_id": "621ea1002cb0729c56171fb0",
    "firstName": "Test",
    "lastName": "Testerly",
    "email": "test@me.com",
    "password": "$2b$10$1z1vTBumAuMfR08S6HRByOJxSAT8DN1t6IREIDe.rI4Uk71WwCsIm",
    "goals": [
        "621ea1d52cb0729c56171fb5"
    ],
    "comments": [
        "621ea3462cb0729c56171fc8",
        "621ea3612cb0729c56171fcd"
    ],
    "createdAt": "2022-03-01T22:41:04.675Z",
    "updatedAt": "2022-03-01T23:13:29.020Z",
    "__v": 0
}
```

<div id="id-goal-routes" />

### Goal

#### *Create Goal*
POST `localhost:8000/api/goals`

**Request Body Example:**
```JS
{
    "title": "Deploy App",
    "completed": "false",
    "createdBy": "621c2939c971d0048e3345d5"
}
```

**Response Example**
```JS
{
    "title": "Deploy App",
    "completed": false,
    "comments": [],
    "milestones": [],
    "createdBy": "621ea1002cb0729c56171fb0",
    "_id": "621ea9522cb0729c56171fe0",
    "createdAt": "2022-03-01T23:16:34.065Z",
    "updatedAt": "2022-03-01T23:16:34.065Z",
    "__v": 0
}
```

#### *Get One Goal*
GET `localhost:8000/api/goals/621ea1d52cb0729c56171fb5`

**Request Body Example:**
```JS
none
```

**Response Example**
```JS
{
    "_id": "621ea1d52cb0729c56171fb5",
    "title": "Document the API",
    "completed": false,
    "comments": [
        {
            "_id": "621ea3462cb0729c56171fc8",
            "body": "This is awesome and will greatly improve our working efficiency!",
            "likes": 0,
            "associatedGoal": "621ea1d52cb0729c56171fb5",
            "createdBy": "621ea1002cb0729c56171fb0",
            "createdAt": "2022-03-01T22:50:46.523Z",
            "updatedAt": "2022-03-01T22:50:46.523Z"
        },
        {
            "_id": "621ea3612cb0729c56171fcd",
            "body": "Can't wait to see how this turns out.",
            "likes": 0,
            "associatedGoal": "621ea1d52cb0729c56171fb5",
            "createdBy": "621ea1002cb0729c56171fb0",
            "createdAt": "2022-03-01T22:51:13.350Z",
            "updatedAt": "2022-03-01T22:51:13.350Z"
        }
    ],
    "milestones": [
        {
            "_id": "621ea2df2cb0729c56171fbd",
            "title": "Test routes to get in/out examples",
            "description": "tesetsetsestes",
            "completed": false,
            "createdBy": "621ea1002cb0729c56171fb0",
            "associatedGoal": "621ea1d52cb0729c56171fb5",
            "createdAt": "2022-03-01T22:49:03.843Z",
            "updatedAt": "2022-03-01T22:49:03.843Z"
        },
        {
            "_id": "621ea2f12cb0729c56171fc1",
            "title": "Document routes in readme.md with in/out examples",
            "description": "tesetsetsestes",
            "completed": false,
            "createdBy": "621ea1002cb0729c56171fb0",
            "associatedGoal": "621ea1d52cb0729c56171fb5",
            "createdAt": "2022-03-01T22:49:21.633Z",
            "updatedAt": "2022-03-01T22:49:21.633Z"
        }
    ],
    "createdBy": "621ea1002cb0729c56171fb0",
    "createdAt": "2022-03-01T22:44:37.487Z",
    "updatedAt": "2022-03-01T22:51:13.362Z",
    "__v": 0
}
```

#### *Get All Goals By User*
GET `localhost:8000/api/goals/user/621ea1002cb0729c56171fb0`

**Request Body Example:**
```JS
none
```

**Response Example**
```JS
[
    {
        "_id": "621ea9522cb0729c56171fe0",
        "title": "Deploy App",
        "completed": false,
        "comments": [],
        "milestones": [],
        "createdBy": "621ea1002cb0729c56171fb0",
        "createdAt": "2022-03-01T23:16:34.065Z",
        "updatedAt": "2022-03-01T23:16:34.065Z",
        "__v": 0
    },
    {
        "_id": "621ea1d52cb0729c56171fb5",
        "title": "Document the API",
        "completed": false,
        "comments": [
            {
                "_id": "621ea3462cb0729c56171fc8",
                "body": "This is awesome and will greatly improve our working efficiency!",
                "likes": 0,
                "associatedGoal": "621ea1d52cb0729c56171fb5",
                "createdBy": "621ea1002cb0729c56171fb0",
                "createdAt": "2022-03-01T22:50:46.523Z",
                "updatedAt": "2022-03-01T22:50:46.523Z"
            },
            {
                "_id": "621ea3612cb0729c56171fcd",
                "body": "Can't wait to see how this turns out.",
                "likes": 0,
                "associatedGoal": "621ea1d52cb0729c56171fb5",
                "createdBy": "621ea1002cb0729c56171fb0",
                "createdAt": "2022-03-01T22:51:13.350Z",
                "updatedAt": "2022-03-01T22:51:13.350Z"
            }
        ],
        "milestones": [
            {
                "_id": "621ea2df2cb0729c56171fbd",
                "title": "Test routes to get in/out examples",
                "description": "tesetsetsestes",
                "completed": false,
                "createdBy": "621ea1002cb0729c56171fb0",
                "associatedGoal": "621ea1d52cb0729c56171fb5",
                "createdAt": "2022-03-01T22:49:03.843Z",
                "updatedAt": "2022-03-01T22:49:03.843Z"
            },
            {
                "_id": "621ea2f12cb0729c56171fc1",
                "title": "Document routes in readme.md with in/out examples",
                "description": "tesetsetsestes",
                "completed": false,
                "createdBy": "621ea1002cb0729c56171fb0",
                "associatedGoal": "621ea1d52cb0729c56171fb5",
                "createdAt": "2022-03-01T22:49:21.633Z",
                "updatedAt": "2022-03-01T22:49:21.633Z"
            }
        ],
        "createdBy": "621ea1002cb0729c56171fb0",
        "createdAt": "2022-03-01T22:44:37.487Z",
        "updatedAt": "2022-03-01T22:51:13.362Z",
        "__v": 0
    }
]
```

#### *Update Goal*
PUT `localhost:8000/api/goals/user/621ea1002cb0729c56171fb0`

**Request Body Example:**
```JS
{
    "title": "Document the heck out of this API!"
}
```

**Response Example**
```JS
{
    "_id": "621ea1d52cb0729c56171fb5",
    "title": "Document the heck out of this API!",
    "completed": false,
    "comments": [
        {
            "_id": "621ea3462cb0729c56171fc8",
            "body": "This is awesome and will greatly improve our working efficiency!",
            "likes": 0,
            "associatedGoal": "621ea1d52cb0729c56171fb5",
            "createdBy": "621ea1002cb0729c56171fb0",
            "createdAt": "2022-03-01T22:50:46.523Z",
            "updatedAt": "2022-03-01T22:50:46.523Z"
        },
        {
            "_id": "621ea3612cb0729c56171fcd",
            "body": "Can't wait to see how this turns out.",
            "likes": 0,
            "associatedGoal": "621ea1d52cb0729c56171fb5",
            "createdBy": "621ea1002cb0729c56171fb0",
            "createdAt": "2022-03-01T22:51:13.350Z",
            "updatedAt": "2022-03-01T22:51:13.350Z"
        }
    ],
    "milestones": [
        {
            "_id": "621ea2df2cb0729c56171fbd",
            "title": "Test routes to get in/out examples",
            "description": "tesetsetsestes",
            "completed": false,
            "createdBy": "621ea1002cb0729c56171fb0",
            "associatedGoal": "621ea1d52cb0729c56171fb5",
            "createdAt": "2022-03-01T22:49:03.843Z",
            "updatedAt": "2022-03-01T22:49:03.843Z"
        },
        {
            "_id": "621ea2f12cb0729c56171fc1",
            "title": "Document routes in readme.md with in/out examples",
            "description": "tesetsetsestes",
            "completed": false,
            "createdBy": "621ea1002cb0729c56171fb0",
            "associatedGoal": "621ea1d52cb0729c56171fb5",
            "createdAt": "2022-03-01T22:49:21.633Z",
            "updatedAt": "2022-03-01T22:49:21.633Z"
        }
    ],
    "createdBy": "621ea1002cb0729c56171fb0",
    "createdAt": "2022-03-01T22:44:37.487Z",
    "updatedAt": "2022-03-01T23:24:55.773Z",
    "__v": 0
}
```

#### *Delete Goal*
DELETE `localhost:8000/api/goals/621ea9522cb0729c56171fe0`

**Request Body Example:**
```JS
none
```

**Response Example**
```JS
{
    "deletedCount": 1
}
```

<div id="id-milestone-routes" />

### Milestone 

#### *Create Milestone*
POST `localhost:8000/api/milestones`

**Request Body Example:**
```JS
{
    "title": "Celebrate having documented the API!",
    "description": "Oh yeah!",
    "completed": "false",
    "createdBy": "621c2939c971d0048e3345d5",
    "associatedGoal": "621ea1d52cb0729c56171fb5"
}
```

**Response Example**
```JS
{
    "title": "Celebrate having documented the API!",
    "description": "Oh yeah!",
    "completed": false,
    "createdBy": "621ea1002cb0729c56171fb0",
    "associatedGoal": "621ea1d52cb0729c56171fb5",
    "_id": "621eac790692545f0cf09339",
    "createdAt": "2022-03-01T23:30:01.747Z",
    "updatedAt": "2022-03-01T23:30:01.747Z",
    "__v": 0
}
```

#### *Update Milestone*
PUT `localhost:8000/api/milestones/621eac790692545f0cf09339`

**Request Body Example:**
```JS
{
    "description": "Heck Yeah!"
}
```

**Response Example**
```JS
{
    "_id": "621eac790692545f0cf09339",
    "title": "Celebrate having documented the API!",
    "description": "Heck Yeah!",
    "completed": false,
    "createdBy": "621ea1002cb0729c56171fb0",
    "associatedGoal": "621ea1d52cb0729c56171fb5",
    "createdAt": "2022-03-01T23:30:01.747Z",
    "updatedAt": "2022-03-01T23:32:53.716Z",
    "__v": 0
}
```

#### *Delete Milestone*
DELETE `localhost:8000/api/milestones/621eac790692545f0cf09339`

**Request Body Example:**
```JS
none
```

**Response Example**
```JS
{
    "deletedCount": 1
}
```

<div id="id-comment-routes" />

### Comment

#### *Create Comment*
POST `localhost:8000/api/comments`

**Request Body Example:**
```JS
{
    "body": "I love documentation!",
    "likes": 0,
    "associatedGoal": "621ea1d52cb0729c56171fb5"
}
```

**Response Example**
```JS
{
    "body": "I love documentation!",
    "likes": 0,
    "associatedGoal": "621ea1d52cb0729c56171fb5",
    "_id": "621eaf36936419abfa59b57a",
    "createdBy": "621ea1002cb0729c56171fb0",
    "createdAt": "2022-03-01T23:41:42.683Z",
    "updatedAt": "2022-03-01T23:41:42.683Z",
    "__v": 0
}
```

#### *Update Comment*
PUT `localhost:8000/api/comments/621eaf36936419abfa59b57a`

**Request Body Example:**
```JS
{
    "body": "I too, love documentation:)"
}
```

**Response Example**
```JS
{
    "_id": "621eaf36936419abfa59b57a",
    "body": "I too, love documentation:)",
    "likes": 0,
    "associatedGoal": "621ea1d52cb0729c56171fb5",
    "createdBy": "621ea1002cb0729c56171fb0",
    "createdAt": "2022-03-01T23:41:42.683Z",
    "updatedAt": "2022-03-01T23:45:28.967Z",
    "__v": 0
}
```

#### *Delete Comment*
DELETE `localhost:8000/api/comments/621eaf36936419abfa59b57a`

**Request Body Example:**
```JS
none
```

**Response Example**
```JS
{
    "deletedCount": 1
}
```



## Developer Setup
Work in progress...
