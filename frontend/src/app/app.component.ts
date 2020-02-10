import { Component } from '@angular/core';
import {User} from './models/user';
import { UserService } from './services/users.service';
import { NgForm } from '@angular/forms';


declare var M : any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[UserService]
})
export class AppComponent {
  public title = 'Teachers App';
  public user: User;
  public user_register: User;
  public identity = null;
  public token;

  constructor(private userService: UserService){
    this.user = new User('','','','','','ROLE_USER','');
    this.user_register = new User('','','','','','ROLE_USER','');
  }

  ngOnInit(){
    this.identity = this.userService.getIdentity();
    this.token = this.userService.getToken();
  }
  logout(){
    localStorage.removeItem('identity');
    localStorage.removeItem('token');
    localStorage.clear();
    this.identity = null;
    this.token = null;
    M.toast({html:'Logout successfully ,thanks for your visit'});
  }
  public onSubmitLogin(form: NgForm){

    const params = {
      email: form.value.email,
      password: form.value.password,
      gethash:true
    };
    //Get datas user
      this.userService.signUp(form.value)
        .subscribe(
          response =>{
            console.log(response['user']);
            const identity = response['user'];
            this.identity = identity;

            if(this.token!=null){
              M.toast({html:'Ok Login'});
            }else{
              //Create element token
              localStorage.setItem('identity',JSON.stringify(identity));
              //Get Token
              this.userService.signUp(params)
                .subscribe(
                  res=>{
                    const token = res['token'];
                    this.token = token;
                    if(this.token.length <= 0){
                      M.toast({html:'Error Login'});
                    }else{
                      localStorage.setItem('token',token);
                      this.user = new User('','','','','','ROLE_USER','');
                    }
                  },
                  err=>{
                    M.toast({html:'Not Login'});
                  }
                )
              //Persist in LocalStorage

              
            }
            M.toast({html: 'Login Successfully'});
          },
          error=>{
            console.log(error);
            M.toast({html: 'Not Login'});
          }
        )
  }

  onSubmitRegister(){
    const params ={
      name: this.user_register.name,
      subname: this.user_register.subname,
      email: this.user_register.email,
      password: this.user_register.password,
      role: 'ROLE_USER',
      image: ''
    }
    this.userService.register(params).subscribe(
      response=>{
        const user = response['user'];
        this.user_register = user;
        if(!user._id){
          M.toast({html:'Not register'});
        }else{
          M.toast({html:'User register succesfully. You can login use: '+this.user_register.email});
          this.user_register = new User('','','','','','ROLE_USER','');
        }
      },
      error=>{}
      );
  }
}
