const Teacher = require('../models/teachers');
const teacherCtrl = {};

teacherCtrl.getTeachers = async (req, res)=>{
    const teachers = await Teacher.find();
    res.json(teachers);
    
};

teacherCtrl.createTeacher = async (req, res)=>{
    const teacher = new Teacher(req.body);
    await teacher.save();
    res.json({
        status : 'Teacher save'
    });
};
teacherCtrl.getTeacher = async (req, res) =>{
    const teacher = await Teacher.findById(req.params.id);
    res.json(teacher);
};

teacherCtrl.editTeacher = function(){

};

teacherCtrl.deleteTeacher = function(){

};

module.exports = teacherCtrl;