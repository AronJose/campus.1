import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-list-school-inchage',
  templateUrl: './list-school-inchage.component.html',
  styleUrls: ['./list-school-inchage.component.css']
})
export class ListSchoolInchageComponent implements OnInit {
Incharge:any;
  constructor(private service:ServiceService,public router:Router) { }

  ngOnInit(): void {
    this.Initform();
  }

  Initform(){
    this.service.getSchoollist().subscribe((result:any) =>
    {
      this.Incharge = result;
    }); 
  }
  editIncharge(list:any){
    this.router.navigate(['inchargedit/', list.schoolId]);
    console.log(list);
    
  }
}
