import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = "http://localhost:8080/api/v2/employee";
  constructor(private http : HttpClient) { }

  getEmployeeList(): Observable<Employee[]>{
   return this.http.get<Employee[]>(`${this.baseUrl}`);
  }

  createEmployee(employee: Employee):Observable<Object>{
    return this.http.post(`${this.baseUrl}`,employee)
  }

  getEmployeeById(id: number): Observable<Employee>{
    return this.http.get<Employee>(`${this.baseUrl}/${id}`);
  }

  updateEmployee(id: number, employee:Employee): Observable<Object>{
    return this.http.put(`${this.baseUrl}/${id}`,employee);
  }

  deleteEmployee(id: number): Observable<Object>{
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

}
