import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-schoollist',
  templateUrl: './schoollist.component.html',
  styleUrls: ['./schoollist.component.css']
})
export class SchoollistComponent implements OnInit {

schoollist:any;

  constructor(public service:ServiceService,public roter:Router) { }

  ngOnInit(){
    this.Initform();
  }

  Initform(){
      this.service.getSchoollist().subscribe((result: any) => {
        this.schoollist = result;
        console.log("hello",result);
    
      })
    }
    editcompany(){}
    delete(){}
  }
