import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-student-reg',
  templateUrl: './student-reg.component.html',
  styleUrls: ['./student-reg.component.css']
})
export class StudentRegComponent implements OnInit {
studentreg!:FormGroup;
flag:any;
  constructor(private service:ServiceService,public router:Router,public toaster:ToastrService) { }

  ngOnInit(): void {
    this.InitForm();
  }

  InitForm(){
    this.studentreg = new FormGroup({
      studentName: new FormControl('', [Validators.required]),
      dob: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      email: new FormControl('', [Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)])
    });
  }
registration(){
  if (this.studentreg.invalid) {
    this.flag = true;
  } 
  let param = {
    "studentName":this.studentreg.controls['studentName'].value,
    "dob":this.studentreg.controls['dob'].value,
    "address":this.studentreg.controls['address'].value,
    "phone":this.studentreg.controls['phone'].value,
    "email":this.studentreg.controls['email'].value
  }
  console.log(param);
  
  this.service.addStudent(param).subscribe({
    next: (result: any) => {
      this.toaster.success('Created successfully', '');
      console.log(result);
      
      this.router.navigate(['/schoollist']);

    },
    error: (err: any) => {
      this.toaster.error(err.error.error);
      console.log(err);
    }
  });
}
}

