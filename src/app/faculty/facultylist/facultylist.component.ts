import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-facultylist',
  templateUrl: './facultylist.component.html',
  styleUrls: ['./facultylist.component.css']
})
export class FacultylistComponent implements OnInit {
facultylist:any;
  constructor() { }

  ngOnInit(): void {
  }
  editFaculty(f:any){}
  delete(f:any){}
}
