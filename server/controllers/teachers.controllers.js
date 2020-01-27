const Teacher = require('../models/teachers');
const teacherCtrl = {};

teacherCtrl.getTeachers = async (req, res)=>{
    const teachers = await Teacher.find();
    res.json(teachers);
    
};

teacherCtrl.createTeacher = async (req, res)=>{
    const teacher = new Teacher({
        name:  req.body.name,
        subname: req.body.subname,
        area: req.body.area,
        salary: req.body.salary
    });
    await teacher.save();
    res.json({
        status : 'Teacher save'
    });
};
teacherCtrl.getTeacher = async (req, res) =>{
    const teacher = await Teacher.findById(req.params.id);
    res.json(teacher);
};

teacherCtrl.editTeacher = async (req , res) =>{
    const { id } = req.params;
    const teacher = {
        name : req.body.name,
        subname  : req.body.subname,
        area : req.body.area,
        salary : req.body.salary
    };
    await Teacher.findByIdAndUpdate(id, {$set:teacher}, {new:true});
    res.json({status: "Teacher update"});
};

teacherCtrl.deleteTeacher = async(req, res)=>{
    await Teacher.findByIdAndDelete(req.params.id);
    res.json({status: 'teacher deleted'});

};

module.exports = teacherCtrl;