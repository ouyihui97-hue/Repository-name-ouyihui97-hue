const express = require("express");
const path = require("path");
const app = express();

// API 範例
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from API!" });
});

// 🔹 Vue 靜態檔案
app.use("/vue", express.static(path.join(__dirname, "frontend-vue")));

// 🔹 React 靜態檔案
app.use("/react", express.static(path.join(__dirname, "frontend-react")));

// 預設導向 Vue 首頁
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend-vue", "index.html"));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`✅ Server running on http://localhost:${port}`);
});
