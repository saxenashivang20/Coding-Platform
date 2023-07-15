const express = require('express');
const { Router } = express;
const {
  getAllQuestions,
  getQuestionById,
  addQuestion,
  editQuestion,
  deleteQuestion,
  addTestCases,
  runCode
} = require('../controllers/questionController');
const authenticate = require('../middleware/authenticate');

const router = Router();

// Get all questions
router.get('/', authenticate, getAllQuestions);

// Get a specific question by ID
router.get('/:id', authenticate, getQuestionById);

// Add a new question
router.post('/', authenticate, addQuestion);

// Edit an existing question
router.put('/:id', authenticate, editQuestion);

// Delete a question
router.delete('/:id', authenticate, deleteQuestion);

// Add test cases to a question
router.post('/:id/testcases', authenticate, addTestCases);

// Run code for a question
router.post('/:id/run', authenticate, runCode);

module.exports = router;
