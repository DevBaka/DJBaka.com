import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import { response } from 'express';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Employee } from '../../models/employee';
import { EmployeeEditComponent } from '../employee-edit/employee-edit.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [CommonModule, FormsModule, EmployeeEditComponent, RouterModule],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.scss'
})
export class EmployeesComponent implements OnInit {
  employees:any;
  employee = new Employee;

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

  insertData(){
    this.dataService.insertData(this.employee).subscribe(res =>{
      this.getEmployeesData();
    })
  }

  removeData(id:any){
    console.log(id);
    this.dataService.removeData(id).subscribe(res =>{
      this.getEmployeesData();
    })
  }

}
