const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();

app.use(cors());

// API
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from Node.js backend 🚀" });
});

// Vue 靜態檔案
app.use(express.static(path.join(__dirname, "frontend-vue")));

// React 靜態檔案 (如果要切換，就改成 frontend-react)
// app.use(express.static(path.join(__dirname, "frontend-react")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend-vue", "index.html"));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`✅ Server running on http://localhost:${port}`);
});
