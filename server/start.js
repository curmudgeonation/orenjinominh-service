const app = require('./index.js');

const port = process.env.PORT || 2000;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});