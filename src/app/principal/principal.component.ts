import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
principalreg!:FormGroup;
  constructor(private service:ServiceService,public router:Router) { }

  ngOnInit(): void {
    this.InintForm();
    this.registration();

  }
InintForm(){
  this.principalreg = new FormGroup({
    fullName:new FormControl('',[Validators.required]),
    dob : new FormControl('',[Validators.required]),
    phone : new FormControl('',[Validators.required]),
    address : new FormControl('',[Validators.required]),
    email: new FormControl('', [Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]),
    password: new FormControl('',[Validators.required])
  });
}

registration(){
  if(this.principalreg.valid)
    {
    let param = {
      "fullName":this.principalreg.controls['fullName'].value,
      "dob":this.principalreg.controls['dob'].value,
      "phone":this.principalreg.controls['phone'].value,
      "address":this.principalreg.controls['address'].value,
      "email":this.principalreg.controls['email'].value,
      "password":this.principalreg.controls['password'].value,
      "role":2
    }
    this.service.userreg(param).subscribe({
      next: (result: any) => {
        // this.toaster.success('Created successfully', '');
        alert('success');

      },
      error: (err: any) => {
        // this.toaster.error(err.error.error);
        console.log(err);
      }
    });
  }
  }
}

