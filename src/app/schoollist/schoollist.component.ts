import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-schoollist',
  templateUrl: './schoollist.component.html',
  styleUrls: ['./schoollist.component.css']
})
export class SchoollistComponent implements OnInit {
  searchs:FormGroup=new FormGroup(
    { 
      keyword:new FormControl('',Validators.required)
      
    });
schoollist:any;

  constructor(public service:ServiceService,public roter:Router,private toastr: ToastrService) { }

  ngOnInit(){
    this.Initform();

    
  }

  Initform(){
      this.service.getSchoollist().subscribe((result: any) => {
        this.schoollist = result;
    
      })
    }
    delete(item:any){
        this.service.deleteschool(item.schoolId).subscribe({
          next:(result:any)=>{
            this.toastr.success('deleted', '');
            this.Initform();
          },
           error:(error:any)=>{
            alert(error.error.error);
          }
      })
    } 
    
    editSchool(item: any) {
      this.roter.navigate(['schooledit/', item.schoolId])
    }

    search(){
      console.log(this.searchs.value.keyword);
      this.service.search(this.searchs.value.keyword).subscribe({
      })
    }
    }


