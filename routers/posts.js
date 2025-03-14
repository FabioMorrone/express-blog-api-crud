const express  = require('express');	
const router = express.Router();

//index
router.get('/', postController.index);


//show
router.get('/:id', postController.show);


// store
router.post('/', postController.store);


// update
router.put('/:id', postController.update);    


//partial update
router.patch('/:id', postController.modify);


//delete
router.delete('/:id', postController.destroy);



module.exports = router;