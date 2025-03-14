const posts = require('../data/posts');

function index(req, res) {

    let filteredposts = posts;

    console.log(req);

    if (req.query.tags) {
        console.log('filter the result');
        filteredpost = posts.filter(posts => posts.tags.includes(req.query.tags));
    }
    //  res.send('return all posts here');
    res.json(filteredpost);
}


function show(req, res) {

  //console.log(req);
  const postsId = Number(req.params.id);


  const posts = posts.find(posts => posts.id === postsId);
  console.log(posts);

  if (!posts) {

      return res.status(404).json({
          error: '404 not found',
          message: 'posts not found'
      });
  }

  res.json(posts);
  // res.send(`return post with id ${postsId}`);
}

function store (req, res) {
    res.send('store a new posts');
}

function update (req, res) {
    res.send(`update the posts with an id of ${req.params.id}`);
}

function modify (req, res) {
    res.send(`modify the posts with an id of ${req.params.id}`);
}

       
const destroy = (req, res) => {
    const postsId = Number(req.params.id);


    const posts = posts.find(post => posts.id === postsId);
    console.log(pizza);

    if (!posts) {

        return res.status(404).json({
            error: '404 not found',
            message: 'posts not found'
        });
    }


    posts.splice(posts.indexOf(posts), 1);
    console.log(posts);

    res.sendStatus(204)
    
}

module.exports = {
    index,
    show,
    store,
    update,
    modify,
    destroy
};