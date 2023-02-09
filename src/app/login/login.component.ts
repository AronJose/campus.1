import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login!: FormGroup;
  flage: any;
  constructor(private service: ServiceService, public router: Router, public toaster: ToastrService) { }

  ngOnInit(): void {
    this.Initform();

  }
  Initform() {
    this.login = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]),
      password: new FormControl('', [Validators.required, Validators.pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,8}/)])
    });
  }

  logins() {
    if (this.login.invalid) {
      this.flage = true;
    }
    {
      this.service.login(this.login.value).subscribe({
        next: (result: any) => {
          if (result) {
            localStorage.setItem('accesstoken', result.accessToken.value),
              localStorage.setItem('role', result.role)
            localStorage.setItem('userId', result.userId)
          }
          this.toaster.success('Created successfully', '');
          this.router.navigate(['/schoollist']);

        },
        error: (err: any) => {
          this.toaster.error(err.error.error);
        }
      });
    }
  }
}
