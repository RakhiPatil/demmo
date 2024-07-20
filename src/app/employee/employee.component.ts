import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { UpdateEmployeeComponent } from '../update-employee/update-employee.component';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule,UpdateEmployeeComponent],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit {
  employees : Employee[] =[];

  constructor(private employeeService : EmployeeService, private rout:Router){}

  ngOnInit(): void {

  this.getEmployeeList();

    
    }

    private  getEmployeeList() {
      this.employeeService.getEmployeeList().subscribe(data=>{
        console.log('api response',data);
        this.employees=data
      })
      }
  
    updateEmployee(id: number){
      this.rout.navigate(['update-employee', id]);
    }
    
    deleteEmployee(id: number){
      this.employeeService.deleteEmployee(id).subscribe(data=>{
        alert(`Employee Deleted!!`)
        this.getEmployeeList();
      })
    }

}
