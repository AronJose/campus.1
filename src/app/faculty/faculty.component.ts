import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent implements OnInit {
  facultyreg!:FormGroup;
  flag:any;
  faculty:any;
  constructor(private service:ServiceService,public toaster:ToastrService) { }

  ngOnInit(): void {
    this.Initform();
    this.getSchoollist();
  }

  Initform(){
    this.facultyreg = new FormGroup({
      fullName:new FormControl('',[Validators.required]),
      dob : new FormControl('',[Validators.required]),
      phone : new FormControl('',[Validators.required]),
      address : new FormControl('',[Validators.required]),
      schoolId : new FormControl(''),
      email: new FormControl('', [Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]),
      password: new FormControl('',[Validators.required])
    });
  }

  getSchoollist(){
    this.service.getSchoolList().subscribe((result: any) => {
      this.faculty = result;
      console.log(result);
  
    })
  }

  registration(){
    console.log(this.facultyreg.value);
    if(this.facultyreg.invalid)
    {
      this.flag = true;
    }
    let param = {
      "fullName":this.facultyreg.controls['fullName'].value,
      "dob":this.facultyreg.controls['dob'].value,
      "phone":this.facultyreg.controls['phone'].value,
      "address":this.facultyreg.controls['address'].value,
      "schoolId":this.facultyreg.controls['schoolId'].value,
      "email":this.facultyreg.controls['email'].value,
      "password":this.facultyreg.controls['password'].value,
      "role":3
    }
    this.service.Faculty(param).subscribe({
      next: (result: any) => {
        this.toaster.success('Created successfully', '')
        console.log(this.facultyreg.value);
        
      },
      error: (err: any) => {
        this.toaster.error(err.error.error);
        console.log(err);
      }
    });
  }
  }

