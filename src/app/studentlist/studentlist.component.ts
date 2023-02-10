import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit {
  studentlist: any;
  constructor(private service: ServiceService, public toastr: ToastrService,public roter:Router) { }

  ngOnInit(): void {
    this.InitForm();
  }

  InitForm() {
    this.service.facultystudent().subscribe((result: any) => {
      this.studentlist = result;

    })
  }
  editStudent(item: any) {
    this.roter.navigate(['studentedit/', item.schoolId])
   }
  delete(item: any) {
    this.service.studentdelete(item.studentId).subscribe({
      next: (result: any) => {
        this.toastr.success('deleted', '');
        this.InitForm();
      },
      error: (error: any) => {
        alert(error.error.error);
      }
    })
  }
}
