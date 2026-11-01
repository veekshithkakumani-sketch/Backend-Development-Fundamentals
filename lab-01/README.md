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

Run the following commands from the `lab-01` directory. From the repository root, first run `cd lab-01`.

### Step 1: Install dependencies

```bash
npm install
```

### Step 2: Run a server

```bash
npm start             # Express server with the lab routes
npm run start:express # Express server with a 404 handler
npm run start:http    # optional plain Node.js HTTP server
```

The servers run at `http://localhost:3000`.

## 5. Routes Implemented

| Route | Description |
|---|---|
| `/` | Displays the welcome message |
| `/about` | Displays student information in JSON format |
| `/time` | Displays the current date and time |
| Unknown route | Returns a 404 response in `server.js` |

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