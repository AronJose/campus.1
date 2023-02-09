import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-schooledit',
  templateUrl: './schooledit.component.html',
  styleUrls: ['./schooledit.component.css']
})
export class SchooleditComponent implements OnInit {
  schooledit!:FormGroup;
  school:any;
  schoolId:any;
  constructor(private service:ServiceService,public activerouter:ActivatedRoute,public router:Router,public toaster:ToastrService) { }

  ngOnInit(): void {
    this.initupdate();
    this.getPrincipallist();
    this.activerouter.params.subscribe((param:any)=>{
      this.schoolId = param['id'];
      this.getschools();
    })
    

  }
  initupdate(){
    this.schooledit = new FormGroup({
      schoolName:new FormControl('',[Validators.required]),
      place : new FormControl('',[Validators.required]),
      address : new FormControl('',[Validators.required]),
      contact : new FormControl('',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      email: new FormControl('', [Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]),
      userId : new FormControl('',[Validators.required])
    })
  }

  getschools(){
    this.service.getschool(this.schoolId).subscribe({
      next: (result:any) => {
        this.schoolId = result.schoolId;
        this.schooledit.controls['schoolName'].setValue(result.schoolName),
          this.schooledit.controls['place'].setValue(result.place),
          this.schooledit.controls['address'].setValue(result.address),
          this.schooledit.controls['contact'].setValue(result.contact),
          this.schooledit.controls['email'].setValue(result.email),
          this.schooledit.controls['userId'].setValue(result.userId)

      },error: (err: any) => {
        this.toaster.error(err.error.error);
        alert('error')
      }
    });
  }

  getPrincipallist(){
    this.service.getPricipalList().subscribe((result: any) => {
      this.school = result;
      console.log(result);
  
    })
  }

  update(){
    if (this.schooledit.valid) {
      this.service.updateschool(this.schooledit.value, this.schoolId).subscribe({
        next: (result: any) => {
          this.toaster.success('success', '');
          this.router.navigate(['/schoollist']);
        },
        error: (err: any) => {
          this.toaster.error(err.error.error);
        }
      });
    }
  }
}

