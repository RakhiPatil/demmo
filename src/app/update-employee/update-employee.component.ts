import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EmployeeComponent } from '../employee/employee.component';

@Component({
  selector: 'app-update-employee',
  standalone: true,
  imports: [FormsModule,EmployeeComponent],
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css'
})
export class UpdateEmployeeComponent implements OnInit {
 
  id: number=0;
  employee:Employee = new Employee();
  constructor(private emp_service: EmployeeService,
    private active_Route: ActivatedRoute,
    private route: Router
  ){}

  ngOnInit(): void {
    this.id = this.active_Route.snapshot.params['id']
    this.emp_service.getEmployeeById(this.id).subscribe(data=>{
      this.employee = data;
      console.log("data", this.employee)
    })
  }

  goToEmployeeList(){
    this.route.navigate(['/employees'])
  }
  
  
  onSubmit(){
    this.emp_service.updateEmployee(this.id,this.employee).subscribe(data=>{
      
      this.goToEmployeeList();
    },error=> console.log(error)
    
  )
  }

}
