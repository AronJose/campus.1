import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
userreg!:FormGroup;
  constructor(private service:ServiceService) { }

  ngOnInit(): void {
    this.Initform();
    this.registation();
  }

  Initform(){
    this.userreg = new FormGroup({
      fullName:new FormControl('',[Validators.required]),
      dob : new FormControl('',[Validators.required]),
      phone : new FormControl('',[Validators.required]),
      address : new FormControl('',[Validators.required]),
      email: new FormControl('', [Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]),
      password: new FormControl('',[Validators.required])
    });
  }

  registation(){
    if(this.userreg.valid)
    {
    let param = {
      "fullName":this.userreg.controls['fullName'].value,
      "dob":this.userreg.controls['dob'].value,
      "phone":this.userreg.controls['phone'].value,
      "address":this.userreg.controls['address'].value,
      "email":this.userreg.controls['email'].value,
      "password":this.userreg.controls['password'].value,
      "role":3
    }
    this.service.userreg(param).subscribe({
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
