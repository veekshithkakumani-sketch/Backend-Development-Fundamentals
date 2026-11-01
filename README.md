# Lab 1: Node.js and Express server

**Name:** K. sree veekshith · **Registration number:** 252U1R9032 · **Section:** CSE GEN-AI

**Live link:** Not deployed yet (add your Render / Railway / Cloud IDE URL here)

## How to run

```bash
npm install
npm start          # Express server on http://localhost:3000
npm run start:http # optional: plain http module version
```

Environment variables: `PORT` (optional, defaults to 3000).

## Endpoints

| Method | Path | Description | Status |
| --- | --- | --- | --- |
| GET | `/` | Welcome text | 200 |
| GET | `/about` | JSON with name and section | 200 |
| GET | `/time` | Current date and time | 200 |
| any | unknown path | "404 - Route not found" | 404 |

## package.json fields

- **name / version / description**: identify the project.
- **main**: entry file of the project.
- **scripts**: shortcut commands run with `npm run <name>` (`npm start`).
- **keywords / author / license**: metadata.
- **dependencies**: packages needed to run the project (Express).

## Screenshots

![Home route](screenshots/home.png)
![About route](screenshots/about.png)
![Time route](screenshots/time.png)
![404 route](screenshots/not-found.png)

## Notes

Problems faced and how I solved them: (write here)
