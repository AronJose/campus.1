import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
adminreg!:FormGroup;
  constructor(private service:ServiceService,public router:Router) { }

  ngOnInit(): void {
    this.initform();
    this.registation();
  }
initform(){
  this.adminreg = new FormGroup({
    fullName:new FormControl('',[Validators.required]),
    dob : new FormControl('',[Validators.required]),
    phone : new FormControl('',[Validators.required]),
    address : new FormControl('',[Validators.required]),
    email: new FormControl('', [Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]),
    password: new FormControl('',[Validators.required])
  });
}

  registation(){
    if(this.adminreg.valid)
    {
    let param = {
      "fullName":this.adminreg.controls['fullName'].value,
      "dob":this.adminreg.controls['dob'].value,
      "phone":this.adminreg.controls['phone'].value,
      "address":this.adminreg.controls['address'].value,
      "email":this.adminreg.controls['email'].value,
      "password":this.adminreg.controls['password'].value,
      "role":1
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
