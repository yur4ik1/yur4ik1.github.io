# njbladmin

## User Data localStorage Documentation

User data is stored in the session in JSON format, containing various fields and additional data related to the user.

### Fields in User Data

- **active (boolean):** User's activity status
- **emain (string):** User's email
- **firstname (string):** User's first name
- **id (Int):** User's Id
- **job_id (Int):** User's job Id
- **lastname (string):** User's last name
- **level_id (Int):** User's level ID
- **manager_id (Int):** User's manager's ID
- **role (string):** User's role
- **status (Int):** user's status

### Additional data:

- **users_job (object):** User`s job information
    - **department_id (Int):** Department Id
    - **id (Int):** Job Id
    - **title (string):** Job title
- **users_level (object):** Not used yet

- **users_manager (object):** User's manager information.
    - **firstname (string):** Manager`s first name
    - **lastname (string):** Manager`s last name
    - **id (Int):** Manager's Id

## Retrieving userData from local storage

To obtain data about the current user stored in localStorage, use the following code:

```javascript
const userData = JSON.parse(localStorage.getItem('userData'));
```
After obtaining user data in the 'userData' variable, you can access specific information as follows:
```javascript
const firstName = userData.firstname; // Get the user's first name
const jobTitle = userData.users_job.title; //Get the user's job title
const userManagerFn = userData.users_manager.firstname; // Get the user`s manager`s first name 
