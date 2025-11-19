const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('My first node-ci/cd app:Megha Patel');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
