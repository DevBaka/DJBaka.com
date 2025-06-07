import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../service/data.service';
import { Employee } from '../../models/employee';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-employee-edit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './employee-edit.component.html',
  styleUrl: './employee-edit.component.scss'
})
export class EmployeeEditComponent implements OnInit{
  id:any;
  data:any;
  employee = new Employee();
  constructor(private route:ActivatedRoute, private dataService: DataService){

  }

  ngOnInit(): void{
    this.id = this.route.snapshot.params['id'];
    this.getData();
  }

  getData(){
    this.dataService.getEmployeeById(this.id).subscribe(res =>{
      console.log(res);
      this.data = res;
      this.employee = this.data;
    })
  }

  updateEmployee(){
    this.dataService.updateData(this.id, this.employee).subscribe(res => {
      this.getData();
    });
    
  }

  
}
