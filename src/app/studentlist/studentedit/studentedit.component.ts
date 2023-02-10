import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-studentedit',
  templateUrl: './studentedit.component.html',
  styleUrls: ['./studentedit.component.css']
})
export class StudenteditComponent implements OnInit {
  studentedit: any;
  flag: any;
  student: any;
  studentId: any;
  studentresult:any;
  Date:any;
  aronDate="2022-05-01"
  constructor(private service: ServiceService, public router: Router, public toaster: ToastrService, public activerouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.aronDate="2022-05-01"
    this.InitForm();
    this.getSchoollist();
    this.activerouter.params.subscribe((param: any) => {
      this.studentId = param['id'];
      this.getstudent();
    })
  }

  InitForm() {
    this.studentedit = new FormGroup({
      studentName: new FormControl('', [Validators.required]),
      dob: new FormControl((new Date), [Validators.required]),
      address: new FormControl('', [Validators.required]),
      contact: new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      email: new FormControl('', [Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]),
      schoolId: new FormControl('')
    });
  }

  getSchoollist() {
    this.service.getSchoolList().subscribe((result: any) => {
      this.student = result;
      console.log(result);

    })
  }

  getstudent() {
    this.service.getstudent(this.studentId).subscribe({
      next: (result: any) => {
        this.studentresult = result;
this.Date=new Date (result.dob)
console.log("helloo",this.Date)
        this.studentedit.patchValue(result)
      }, error: (err: any) => {
        this.toaster.error(err.error.error);
      }
    });
  }
  update() {
    console.log(this.studentedit.value);
    if (this.studentedit.valid) {
      this.service.updateStudent(this.studentedit.value, this.studentId).subscribe({
        next: (result: any) => {
          console.log(result);

          this.toaster.success('success', '');
          this.router.navigate(['/studentlist']);
        },
        error: (err: any) => {
          this.toaster.error(err.error.error);
        }
      });
    }
  }
}
