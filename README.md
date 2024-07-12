# PIZZA API

This document provides a comprehensive guide to the tasks and models required for a pizza ordering system. The system encompasses functionalities for user management, pizza order management, and admin functionalities to view all users and orders. Passwords are encrypted, and JSON Web Token (JWT) is used for authentication. Additionally, Nodemailer is used to send emails upon user registration and order creation.

### ERD:

![ERD](./erdPizzaAPI.png)

# Pizza Ordering System Tasks

### 1. User Registration

- [ ] A user can create a new account in the system.
- [ ] A username, password, and email address are required.
- [ ] The password must be at least 8 characters long and contain uppercase/lowercase letters, numbers, and special characters.
- [ ] The email address must be in a valid format.
- [ ] When a user is registered, the password should be encrypted and stored in the database.
- [ ] An email is sent to the user upon successful registration.

```json
{
  "task": "User Registration",
  "data": {
    "username": "john_doe",
    "password": "Password123!",
    "email": "john_doe@example.com"
  }
}
```

### 2. User Login

- [ ] A registered user can log in with their username/email and password.
- [ ] The password should be verified upon login.
- [ ] A JWT token is returned upon successful login.

```json
{
  "task": "User Login",
  "data": {
    "username": "john_doe",
    "password": "Password123!"
  }
}
```

or

```json
{
  "task": "User Login",
  "data": {
    "email": "john_doe@gmail.com",
    "password": "Password123!"
  }
}
```

### 3. Update User Information

- [ ] A user can update their own information (email address or password).
- [ ] The new password must comply with the specified rules.
- [ ] The email address must be in a valid format.

```json
{
  "task": "Update User Information",
  "data": {
    "userId": "60b6a9f1e1d1b24bfc13e0a8",
    "email": "new_email@example.com",
    "password": "NewPassword123!"
  }
}
```

## Pizza Order Model

### 4. Create Order

- [ ] A logged-in user can place a new pizza order.
- [ ] The user ID, pizza ID, size, price and order date are required.
- [ ] An email is sent to the user upon successful order creation.

```json
{
  "task": "Create Order",
  "data": {
    "userId": "668bafc440fa6bce7e43fdfe4",
    "pizzaId": "668bba4c89e3e16b32c6c8f0",
    "size": "Small",
    "quantity": 6,
    "price": 15
  }
}
```

### 5. Cancel Order

- [ ] A user can cancel a specific order.
- [ ] The order ID is required.

```json
{
  "task": "Cancel Order"
}
```

## Admin Tasks

### 6. Users

- [ ] A user with admin privileges can list all users in the system.

```json
{
  "task": "List Users"
}
```

### 7. Orders

- [ ] A user with admin privileges can list, put,patch,delete all orders.

```json
{
  "task": "List Orders"
  "task": "Put Orders"
  "task": "Patch Orders"
  "task": "Delete Orders"
}
```

## Additional Information

### Security

- [ ] Passwords are hashed using passwordEncrypt (helper file).
- [ ] JSON Web Tokens (JWT) are used for securing API endpoints.

### Email Notifications

- Nodemailer is used to send email notifications in the following scenarios:
- [ ] Upon user registration
- [ ] Upon order creation

Clone the project from GitHub:

```bash
git clone https://github.com/karamanburak/PizzaAPI.git
cd pizza-api

Environment Variables
Create a .env file and set the following environment variables:

```

### Folder/File Structure:

```

┣ 📂src
┃ ┣ 📂logs
┃ ┣ 📂configs
┃ ┃ ┣ 📜dbConnection.js
┃ ┃ ┗ 📜swagger.json
┃ ┣ 📂controllers
┃ ┃ ┣ 📜auth.js
┃ ┃ ┣ 📜order.js
┃ ┃ ┣ 📜pizza.js
┃ ┃ ┣ 📜token.js
┃ ┃ ┣ 📜topping.js
┃ ┃ ┗ 📜user.js
┃ ┣ 📂errors
┃ ┃ ┗ 📜customError.js
┃ ┣ 📂helpers
┃ ┃ ┣ 📜passwordEncrypt.js
┃ ┃ ┗ 📜sync.js
┃ ┣ 📂middlewares
┃ ┃ ┣ 📜authentication.js
┃ ┃ ┣ 📜errorHandler.js
┃ ┃ ┣ 📜idValidation.js
┃ ┃ ┣ 📜logging.js
┃ ┃ ┣ 📜permissions.js
┃ ┃ ┗ 📜queryHandler.js
┃ ┣ 📂models
┃ ┃ ┣ 📜order.js
┃ ┃ ┣ 📜pizza.js
┃ ┃ ┣ 📜token.js
┃ ┃ ┣ 📜topping.js
┃ ┃ ┗ 📜user.js
┃ ┗ 📂routes
┃ ┃ ┣ 📜auth.js
┃ ┃ ┣ 📜documents.js
┃ ┃ ┣ 📜index.js
┃ ┃ ┣ 📜order.js
┃ ┃ ┣ 📜pizza.js
┃ ┃ ┣ 📜token.js
┃ ┃ ┣ 📜topping.js
┃ ┃ ┗ 📜user.js
┣ 📜.env
┣ 📜.env-sample
┣ 📜.gitignore
┣ 📜erdPizzaAPI.png
┣ 📜index.js
┣ 📜package-lock.json
┣ 📜package.json
┣ 📜readme.md
┗ 📜swaggerAutogen.js

```

## Documentations

- [View Swagger Documentation]()
- [View Redoc Documentation]()
- [View Json Documentation]()
