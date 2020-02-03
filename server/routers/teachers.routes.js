const express = require('express');
const router = express.Router();
const teacherCtrl = require('../controllers/teachers.controllers');
const md_auth = require('../middleware/authenticated');

//Define API
router.get('/' ,md_auth.ensureAuth,teacherCtrl.getTeachers);
router.post('/' , teacherCtrl.createTeacher);
router.get('/:id' , teacherCtrl.getTeacher);
router.put('/:id' , teacherCtrl.editTeacher);
router.delete('/:id' , teacherCtrl.deleteTeacher);
module.exports = router;