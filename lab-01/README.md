# Lab 01: Backend Development Fundamentals

## 1. Student Details

- **Name:** K. Sree Veekshith
- **Section:** CSE Gen AI
- **Subject:** Backend Development Fundamentals
- **Experiment:** Node.js and Express Server

## 2. Aim

To create and execute an HTTP server and an Express.js server using Node.js and understand basic routing and request-response handling.

## 3. Software Requirements

- Node.js
- Visual Studio Code
- Express.js
- Google Chrome
- Terminal / PowerShell

## 4. Implementation

### Step 1: Initialize the Node.js project

```bash
npm init -y
```

This command creates the `package.json` file for managing project information and dependencies.

### Step 2: Install Express.js

```bash
npm install express
```

This command installs the Express.js framework.

### Step 3: Create the server

Create an `index.js` file and write the Express server code.

### Step 4: Execute the server

```bash
node index.js
```

The server runs at:

`http://localhost:3000`

## 5. Routes Implemented

| Route | Description |
|---|---|
| `/` | Displays the welcome message |
| `/about` | Displays student information in JSON format |
| `/time` | Displays the current date and time |

## 6. Screenshots

Add your screenshots in the `screenshots` folder.

1. Home page – `home.png`
2. About page – `about.png`
3. Time page – `time.png`
4. Not Found page – `not-found.png` (only if implemented)
5. Server output – `server-output.png`

## 7. Result

Successfully created and executed an Express.js server using Node.js. The home, about, and time routes were tested successfully in the browser.

## 8. Conclusion

This experiment helped me understand the fundamentals of backend development, Node.js, Express.js, routing, and request-response handling. I learned how to initialize a Node.js project, install dependencies, create routes, execute a server, and test it using a web browser.