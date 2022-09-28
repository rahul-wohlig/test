const express = require('express');
const router = express.Router();

const {
  listStudent,
  registerStudent,
  updateStudent,
  deleteStudent,
} = require('../controllers/studentController');

router.get('/', listStudent);
router.post('/register', registerStudent);
router.put('/update/:id', updateStudent);
router.delete('/delete/:id', deleteStudent);

module.exports = router;
