const express = require('express');
const { getNotes,createNote,getNoteById ,updateNote,deleteNote} = require('../controllers/noteController');
const router = express.Router();


router.route('/').get(getNotes)
 router.route('/create').post(createNote);
router.route('/:id').get(getNoteById).put(updateNote).delete(deleteNote);

module.exports=router;