import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  principalreg!: FormGroup;
  flag: any;
  constructor(private service: ServiceService, public router: Router, public toaster: ToastrService) { }

  ngOnInit(): void {
    this.InintForm();
    // this.registration();

  }
  InintForm() {
    this.principalreg = new FormGroup({
      fullName: new FormControl('', [Validators.required]),
      dob: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      address: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]),
      password: new FormControl('', [Validators.required])
    });
  }

  registration() {
    if (this.principalreg.invalid) {
      this.flag = true;
    }
    let param = {
      "fullName": this.principalreg.controls['fullName'].value,
      "dob": this.principalreg.controls['dob'].value,
      "phone": this.principalreg.controls['phone'].value,
      "address": this.principalreg.controls['address'].value,
      "email": this.principalreg.controls['email'].value,
      "password": this.principalreg.controls['password'].value,
      "role": 2
    }
    this.service.principal(param).subscribe({
      next: (result: any) => {
        this.toaster.success('Created successfully', '');
      },
      error: (err: any) => {
        this.toaster.error(err.error.error);
      }
    });
  }
}


