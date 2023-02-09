import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-facultylist',
  templateUrl: './facultylist.component.html',
  styleUrls: ['./facultylist.component.css']
})
export class FacultylistComponent implements OnInit {
facultylist:any;
  constructor(private service:ServiceService,public router:Router,public toaster:ToastrService) { }

  ngOnInit(): void {
    this.InitForm();
  }

  InitForm(){
    this.service.getFaculty().subscribe((result:any)=>{
      this.facultylist = result;
    })
  }
  editFaculty(f:any){
    this.router.navigate(['facultyedit/',f.userId]);
    console.log(f.userId);
    
  }
  delete(f:any){
    this.service.deleteFaculty(f.userId).subscribe({
      next:(result:any)=>{
        this.toaster.success('deleted', '');
            this.InitForm();
          },
           error:(error:any)=>{
            alert(error.error.error);
          }
      })
  }
}
