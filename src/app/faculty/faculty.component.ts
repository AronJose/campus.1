import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent implements OnInit {
  facultyreg!:FormGroup;
  flag:any;
  constructor(private service:ServiceService) { }

  ngOnInit(): void {
    this.Initform();
    // this.registration();
  }

  Initform(){
    this.facultyreg = new FormGroup({
      fullName:new FormControl('',[Validators.required]),
      dob : new FormControl('',[Validators.required]),
      phone : new FormControl('',[Validators.required]),
      address : new FormControl('',[Validators.required]),
      email: new FormControl('', [Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]),
      password: new FormControl('',[Validators.required])
    });
  }

  registration(){
    if(this.facultyreg.invalid)
    {
      this.flag = true;
    }
    let param = {
      "fullName":this.facultyreg.controls['fullName'].value,
      "dob":this.facultyreg.controls['dob'].value,
      "phone":this.facultyreg.controls['phone'].value,
      "address":this.facultyreg.controls['address'].value,
      "email":this.facultyreg.controls['email'].value,
      "password":this.facultyreg.controls['password'].value,
      "role":3
    }
    this.service.Faculty(param).subscribe({
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

