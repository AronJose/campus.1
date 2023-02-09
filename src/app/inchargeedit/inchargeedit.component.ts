import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-inchargeedit',
  templateUrl: './inchargeedit.component.html',
  styleUrls: ['./inchargeedit.component.css']
})
export class InchargeeditComponent implements OnInit {
  Inchargeedit!: FormGroup;
  Incharges: any;
  schoolId: any;
  constructor(private service: ServiceService, public toaster: ToastrService, public router: Router, public activerouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.Initupdate();
    this.getPrincipallist();
    this.activerouter.params.subscribe((param: any) => {
      this.schoolId = param['id'];
      this.SchoolIncharge();
    })
  }
  Initupdate() {
    this.Inchargeedit = new FormGroup({
      schoolName:new FormControl('',[Validators.required]),
      place : new FormControl('',[Validators.required]),
      address : new FormControl('',[Validators.required]),
      contact : new FormControl('',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      email: new FormControl('', [Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]),
      userId : new FormControl('',[Validators.required])
    })
  }

  SchoolIncharge() {
    this.service.getschool(this.schoolId).subscribe({
      next: (result: any) => {
        this.Inchargeedit.controls['schoolName'].setValue(result.schoolName),
          this.Inchargeedit.controls['place'].setValue(result.place),
          this.Inchargeedit.controls['address'].setValue(result.address),
          this.Inchargeedit.controls['contact'].setValue(result.contact),
          this.Inchargeedit.controls['email'].setValue(result.email),
          this.Inchargeedit.controls['userId'].setValue(result.userId)
      }, error: (err: any) => {
        this.toaster.error(err.error.error);
      }
    });
  }

  getPrincipallist() {
    this.service.getPricipalList().subscribe((result: any) => {
      this.Incharges = result;
    })
  }

  update() {
    if (this.Inchargeedit.valid) {
      this.service.updateIncharge(this.Inchargeedit.value, this.schoolId).subscribe({
        next: (result: any) => {
          this.toaster.success('success', '');
          this.router.navigate(['/listschoolIncharg']);
        }, error: (err: any) => {
          this.toaster.error(err.error.error);
        }
      });
    }
  }
}

