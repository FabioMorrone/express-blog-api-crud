
const express = require('express');
const app = express();
const port = 3003;


const postsRouter = require('./routers/posts');
const logger = require('./middlewares/logger')
const serverError = require('./middlewares/serverError')
const error_404 = require('./middlewares/error_404')

app.use(express.json());
app.use(express.static('public'))

app.use(logger)




app.get('/', (req, res) => {
  app.daje()
  res.send('welcome to our server');
});





app.use("/api/v1/posts", postsRouter);



app.use(serverError)


app.use(error_404)




app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
  }) 



