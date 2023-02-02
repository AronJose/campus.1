import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
login!:FormGroup;
  constructor(private service:ServiceService) { }

  ngOnInit(): void {
    this.Initform();
    this.logins();
  }
 Initform(){
  this.login = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]),
    password: new FormControl('',[Validators.required])
  });
 }

 logins(){
  if(this.login.valid)
  {
    this.service.login(this.login.value).subscribe({
      next: (result: any) => {
        // this.toaster.success('Created successfully', '');
        alert('success');
        // this.router.navigate(['/companylist']);

      },
      error: (err: any) => {
        // this.toaster.error(err.error.error);
        console.log(err);
      }
    });
  }
}
}
