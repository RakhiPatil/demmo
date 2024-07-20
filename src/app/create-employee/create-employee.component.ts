import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.css'
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee = new Employee();

  constructor(private employeeService:EmployeeService, private route:Router){}

  ngOnInit(): void {
    
  }

  saveEmployee(){
    this.employeeService.createEmployee(this.employee).subscribe(data=>{
      console.log(data);
      this.goToEmployeeList();
    })
  }

  goToEmployeeList(){
    this.route.navigateByUrl('/employees')
  }

  onSubmit(){
    console.log('Employee',this.employee);
    this.saveEmployee();
  }

}
