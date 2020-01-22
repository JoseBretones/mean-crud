import { Component, OnInit } from '@angular/core';
import { TeachersService } from '../../services/teachers.service';
import { Teacher } from '../../models/teacher';
import {NgForm} from '@angular/forms';
 
declare var M : any;

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css'],
  providers: [TeachersService]
})
export class TeachersComponent implements OnInit {

  constructor(private teacherService: TeachersService) { }

  ngOnInit() {
    this.getTeachers();
  }

  addTeacher(form:NgForm){

    if(form.value._id){
      this.teacherService.editTeacher(form.value)
        .subscribe(res =>{
          console.log(res);
          this.resetForm(form);
          M.toast({html:`Teacher update succesfully`});
          this.getTeachers();
        });
      
    }else{

      this.teacherService.createTeacher(form.value)
      .subscribe( res=>{
        console.log(res);
        this.resetForm(form);
        M.toast({html:`Teacher save succesfully`});
        this.getTeachers();
      });
    }    
  }
  resetForm(form:NgForm){
    if(form){
      form.reset();
      this.teacherService.selectedTeacher = new Teacher();
    }
  }
  getTeachers(){
    this.teacherService.getTeachers()
      .subscribe( res =>{
        this.teacherService.teachers = res as Teacher[];
        console.log(res);
      });
  }
  editTeacher(teacher: Teacher){
    this.teacherService.selectedTeacher = teacher;

  }
  deleteTeacher(_id: String){
    if(confirm('Are you sure you want delete it?')){
      this.teacherService.deleteTeacher(_id)
        .subscribe(res=>{
          this.getTeachers();
          M.toast({html:'Teacher deleted succesfully'});
        });
    }
  }
}
