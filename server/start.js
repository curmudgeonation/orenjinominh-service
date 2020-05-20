require('dotenv').config();
const app = require('./index.js');

const port = process.env.PORT || 4000;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});