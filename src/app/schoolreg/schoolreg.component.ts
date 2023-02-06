import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-schoolreg',
  templateUrl: './schoolreg.component.html',
  styleUrls: ['./schoolreg.component.css']
})
export class SchoolregComponent implements OnInit {
schoolreg!:FormGroup;
school:any;
flag: any;
  constructor(private service:ServiceService,public router:Router) { }

  ngOnInit(): void {
    this.InitForm();
    this.getPrincipallist();
    // this.registration();
  }

  InitForm(){
    this.schoolreg = new FormGroup({
      schoolName:new FormControl('',[Validators.required]),
      place : new FormControl('',[Validators.required]),
      address : new FormControl(''),
      contact : new FormControl('',[Validators.required]),
      email: new FormControl('', [Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]),
      userId : new FormControl('')
    });
  }
getPrincipallist(){
  this.service.getPricipalList().subscribe((result: any) => {
    this.school = result;
    console.log(result);

  })
}

registration(){
 
  if (this.schoolreg.invalid) {
    this.flag = true;
  }
  else {
  (this.schoolreg.valid)
  {  
  debugger
  let param = {
    "schoolName":this.schoolreg.controls['schoolName'].value,
    "place":this.schoolreg.controls['place'].value,
    "address":this.schoolreg.controls['address'].value,
    "contact":this.schoolreg.controls['contact'].value,
    "email":this.schoolreg.controls['email'].value,
    "userId":this.schoolreg.controls['userId'].value
  }
  console.log(param);
  
  this.service.addschool(param).subscribe({
    next: (result: any) => {
      // this.toaster.success('Created successfully', '');
      alert('success');
      console.log(result);
      
      this.router.navigate(['/schoollist']);

    },
    error: (err: any) => {
      // this.toaster.error(err.error.error);
      console.log(err);
    }
  });
}
}
}}

