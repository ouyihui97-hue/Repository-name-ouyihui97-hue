const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

// API 路由
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from Node.js backend 🚀" });
});

// 靜態檔案 (如果你要 Node.js 提供 Vue/React 前端)
app.use(express.static("frontend-vue")); 
// 或改成 frontend-react 看你要跑哪個

const port = 3000;
app.listen(port, () => {
  console.log(`✅ Server running on http://localhost:${port}`);
});
