# Todo List Nest js Application

A brief description of your project.

## Getting Started

1. Clone this project to your local machine:

git clone  https://github.com/Mohammadreza-Nozari/NestTodoList/tree/develop

2. Install project dependencies:

cd your-project npm install

3. Configure your environment variables (if needed).

4. Start the development server:

npm run start:dev

## Features

- Describe the key features of your project here.

## API Endpoints

- List the available API endpoints and their functionality.

## Technologies Used

- List the technologies, frameworks, and libraries used in your project.

## Contributing

Contributions are welcome! Please follow the contribution guidelines.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Feel free to customize this template according to your project's specifics. Add more sections, badges, and relevant information as needed. Good luck with your Nest.js project!

---

Certainly! Let’s complete the services. Here are the remaining parts for each service:

##  Todo Service
### Get a Todo by Category:
You’ve already implemented the getTodoByCategory(cat: string): Promise<ITodo[]> method. This function retrieves todos based on their category. Make sure to test it with different categories to ensure it works as expected.
### Add a Todo:
You’ve implemented the addTodo(createTodoContract: CreateTodoContract): Promise<ITodo> method. This function adds a new todo. Remember to validate the input data (e.g., required fields, valid category, etc.) before saving it to the database.
### Update a Todo:
You’ve implemented the updateTodo(id: string, createTodoDTO: CreateTodoContract): Promise<ITodo> method. This function updates an existing todo. Ensure that you handle cases where the specified todo ID doesn’t exist.
### Delete a Todo:
You’ve implemented the deleteTodo(id: string): Promise<any> method. This function deletes a todo by its ID. Make sure to handle cases where the specified ID is invalid or the todo doesn’t exist.
User Service
### Create User:
You’ve implemented the create(userDTO: IRegisterContract) method. This function creates a new user. Remember to hash the password before saving it to the database.
### Find Users:
You’ve implemented the find() method. This function retrieves all users. Consider adding pagination if your user list grows significantly.
### Find User by Login:
You’ve implemented the findByLogin(userDTO: ILoginContract) method. This function validates user credentials during login. Ensure proper error handling for invalid credentials.
### Find User by Payload:
You’ve implemented the findByPayload(payload: IPayload) method. This function retrieves a user based on the payload (usually from a JWT). Verify that it returns the correct user.
### Auth Service
### Sign Payload:
You’ve implemented the signPayload(payload: IPayload) method. This function signs a payload (e.g., user ID) to create a JWT. Make sure to use a secure secret key and handle token expiration.
Validate User:
You’ve implemented the validateUser(payload: IPayload) method. This function validates a user based on the payload extracted from a JWT. Confirm that it correctly retrieves the user.
