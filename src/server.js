const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors()); // Enable CORS for frontend requests
app.use(express.json()); // Parse JSON request bodies

app.post("/api/submit", (req, res) => {
  const { field1, field2 } = req.body;
  console.log("Received Data:", { field1, field2 });

  res.json({ message: "Data submitted successfully!" });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
