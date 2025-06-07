import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import { response } from 'express';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.scss'
})
export class EmployeesComponent implements OnInit {
  employess:any;

  constructor(private dataService:DataService){

  }
  ngOnInit(): void {
    this.getEmployeesData();
  }

  getEmployeesData(){
    this.dataService.getData().subscribe(res => {
      console.log(res);
    });
  }

}
