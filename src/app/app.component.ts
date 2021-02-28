import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from 'src/User';
import { QazisVlogsService } from './qazis-vlogs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-heroku';
  constructor(private service: QazisVlogsService){}
  userForm = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    message:new FormControl()
    }); 
    user:User;

    onFormSubmit(): void{
      this.user = new User(this.userForm.get('name').value,this.userForm.get('email').value,this.userForm.get('message').value,"1234567890");
      this.service.onFormSubmit(this.user);
    }
}
