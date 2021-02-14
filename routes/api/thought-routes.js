const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    addThought,
    updateThought,
    removeThought,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controller');

// set up GET all at /api/thoughts
router
    .route('/')
    .get(getAllThoughts)
    .post(addThought)

// set up GET ONE and PUT at /api/thoughts/:id
router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)

// set up POST at /api/thoughts/:userId
//router.route('/:userId').post(addThought);

// set up DELETE at /api/thoughts/:userId/:thoughtId
router
    .route('/:userId/:thoughtId')
        .delete(removeThought)
        .put(addReaction)

router
    .route('/:thoughtId/reactions/:reactionId')
        .delete(removeReaction);

module.exports = router;