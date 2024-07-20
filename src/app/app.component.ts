import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { CommonModule } from '@angular/common';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,EmployeeComponent,CreateEmployeeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demmo';

  constructor(private route:Router){}

  addEmployee(){
    this.route.navigateByUrl('/create-employee');
  }

  employeeList(){
    this.route.navigateByUrl('/employees');
  }

}
