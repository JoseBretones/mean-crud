const express = require('express');
const router = express.Router();
const teacherCtrl = require('../controllers/teachers.controllers');

//Define API
router.get('/' , teacherCtrl.getTeachers);
router.post('/' , teacherCtrl.createTeacher);
router.get('/:id' , teacherCtrl.getTeacher);
router.put('/:id' , teacherCtrl.editTeacher);
router.delete('/:id' , teacherCtrl.deleteTeacher);
module.exports = router;