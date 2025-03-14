
const express = require('express');
const app = express();
const port = 3000;

const postsRouter = require('./routers/posts');



app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
  }) 


  app.get('/', (req, res) => {
    res.send('welcome to our server');
  });






  app.use("/api/v1/posts", postsRouter);









