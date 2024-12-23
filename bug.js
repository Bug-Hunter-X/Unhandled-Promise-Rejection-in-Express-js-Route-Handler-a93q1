const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // This is a common mistake: asynchronous operations without proper handling
  someAsyncOperation().then(() => {
    res.send('Hello World!');
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

async function someAsyncOperation() {
  // Simulate an asynchronous operation that might fail
  await new Promise(resolve => setTimeout(resolve, 1000));
  // Simulate a potential error
  // throw new Error('Something went wrong!'); 
}