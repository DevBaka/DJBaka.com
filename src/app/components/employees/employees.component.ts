import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import { response } from 'express';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.scss'
})
export class EmployeesComponent implements OnInit {
  employees:any;

  constructor(private dataService:DataService){

  }
  ngOnInit(): void {
    this.getEmployeesData();
  }

  getEmployeesData(){
    this.dataService.getData().subscribe(res => {
      this.employees = res;
    });
  }

}
