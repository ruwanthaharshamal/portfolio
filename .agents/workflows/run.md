---
description: how to run the cybersecurity portfolio application
---

### Development Mode
To run the application in development mode with live reloading:

1. Ensure you are in the project root: `c:\Users\ruwan\Music\my`
2. Run the development command:
// turbo
```bash
npm run dev
```
3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
To create an optimized production build and run it:

1. Generate the production build:
// turbo
```bash
npm run build
```
2. Start the production server:
// turbo
```bash
npm start
```

### Troubleshooting
- If you see `module not found` errors, ensure all dependencies are installed: `npm install`.
- If the build fails with a `UV_HANDLE_CLOSING` error on Windows, simply retry the command; this is an intermittent Node.js/Windows quirk during worker cleanup.
