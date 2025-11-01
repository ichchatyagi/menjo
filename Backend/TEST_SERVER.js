// TEST_SERVER.js - Run this to debug your backend
import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

// Add request logging
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

// Simple test route
app.get("/", (req, res) => {
  console.log("Root route hit!");
  res.json({ message: "Test server is working!", timestamp: new Date() });
});

app.get("/api/test", (req, res) => {
  console.log("Test API route hit!");
  res.json({ status: "success", data: "API is responding" });
});

// Error handling
app.use((err, req, res, next) => {
  console.error("ERROR:", err);
  res.status(500).json({ error: err.message });
});

// 404 handler
app.use((req, res) => {
  console.log("404 - Route not found:", req.url);
  res.status(404).json({ error: "Route not found" });
});

const PORT = 5000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`\n✅ Test server running on:`);
  console.log(`   - http://localhost:${PORT}`);
  console.log(`   - http://127.0.0.1:${PORT}`);
  console.log("\nTry these URLs in your browser:");
  console.log(`   - http://localhost:${PORT}/`);
  console.log(`   - http://localhost:${PORT}/api/test`);
  console.log("\n");
});