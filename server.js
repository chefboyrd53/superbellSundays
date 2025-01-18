const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the 'public' folder
app.use(express.static('public'));

// Serve static files from the 'assets/images' folder
app.use('/assets/images', express.static('assets/images'));

// Default route
app.get('/', (req, res) => {
  res.send('Hello, Mario Kart Challenge!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


