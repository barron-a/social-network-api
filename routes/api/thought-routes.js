const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    addThought,
    updateThought,
    removeThought
} = require('../../controllers/thought-controller');

// set up GET all at /api/thoughts
router.route('/').get(getAllThoughts)

// set up GET ONE and PUT at /api/thoughts/:id
router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)

// set up POST at /api/thoughts/:userId
router.route('/:userId').post(addThought);

// set up DELETE at /api/thoughts/:userId/:thoughtId
router.route('/:userId/:thoughtId').delete(removeThought)

module.exports = router;