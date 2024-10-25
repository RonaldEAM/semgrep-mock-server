const { spawn } = require("child_process");

// Define the path to your Mockoon environment file
const environmentPath = "./semgrep.json";

// Start the Mockoon CLI server
const mockoonProcess = spawn("node_modules/.bin/mockoon-cli", [
  "start",
  "--data",
  environmentPath,
  "--port",
  "80",
]);

// Listen for any output from Mockoon CLI
mockoonProcess.stdout.on("data", (data) => {
  console.log(`Mockoon CLI output: ${data}`);
});

// Listen for errors
mockoonProcess.stderr.on("data", (data) => {
  console.error(`Mockoon CLI error: ${data}`);
});

// Detect when the process exits
mockoonProcess.on("close", (code) => {
  console.log(`Mockoon CLI process exited with code ${code}`);
});
