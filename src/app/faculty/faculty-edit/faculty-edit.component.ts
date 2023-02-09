import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-faculty-edit',
  templateUrl: './faculty-edit.component.html',
  styleUrls: ['./faculty-edit.component.css']
})
export class FacultyEditComponent implements OnInit {
  facultyedit!: FormGroup;
  flag: any;
  userId: any;
  constructor(private service: ServiceService, public router: Router, public toaster: ToastrService, public activerouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.Initform();
    this.activerouter.params.subscribe((param: any) => {
      this.userId = param['id'];
      console.log(this.userId);

      this.getFaculty();
    })
  }

  Initform() {
    this.facultyedit = new FormGroup({
      fullName: new FormControl('', [Validators.required]),
      dob: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)])
    });
  }
  getFaculty() {
    this.service.getfaculty(this.userId).subscribe({
      next: (result: any) => {
        this.facultyedit.controls['fullName'].setValue(result.fullName),
          this.facultyedit.controls['dob'].setValue(result.dob),
          this.facultyedit.controls['phone'].setValue(result.phone),
          this.facultyedit.controls['address'].setValue(result.address),
          this.facultyedit.controls['email'].setValue(result.email)

      }, error: (err: any) => {
        this.toaster.error(err.error.error);
      }
    });
  }

  Update() {
    if (this.facultyedit.invalid) {
      this.flag = true;
    }
    this.service.updateFaculty(this.facultyedit.value, this.userId).subscribe({
      next: (result: any) => {
        this.toaster.success('Updation success', '');
        this.router.navigate(['/facultyist']);
        console.log(result);
      },
      error: (err: any) => {
        this.toaster.error(err.error.error);
        console.log(err);
      }
    });
  }
}

