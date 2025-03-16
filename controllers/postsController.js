const lista = require('../data/lista');

function index(req, res) {

    let filteredlista = lista;

    console.log(req);

    if (req.query.tags) {
        console.log('filter the result');
        filteredlista = lista.filter(post => post.tags.includes(req.query.tags));
    }
    //  res.send('return all posts here');
    res.json(filteredlista);
}


function show(req, res) {

  //console.log(req);
  const postId = Number(req.params.id);


  const post = lista.find(post => post.id === postId);
  console.log(post);

  if (!post) {

      return res.status(404).json({
          error: '404 not found',
          message: 'posts not found'
      });
  }

  res.json(post);
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
    const postId = Number(req.params.id);


    const post = lista.find(post => post.id === postId);
    console.log(post);

    if (!post) {

        return res.status(404).json({
            error: '404 not found',
            message: 'post not found'
        });
    }


    lista.splice(lista.indexOf(post), 1);
    console.log(lista);

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