import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseURL = 'http://localhost:8080/api/employees';

  constructor(private httpClient: HttpClient) {}

  getEmployeeList(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${this.baseURL}`);
  }
  createEmployee(employee: Employee): Observable<Employee> {
    return this.httpClient.post<Employee>(this.baseURL, employee);
  }
  getEmployeeById(id:Number):Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseURL}/${id}`)
  }

  updateEmployee(id:Number,employee:Employee):Observable<Employee>{
    return this.httpClient.put<Employee>(`${this.baseURL}/${id}`,employee)
  }
  deleteEmployeeById(id:Number):Observable<Employee>{
    return this.httpClient.delete<Employee>(`${this.baseURL}/${id}`)
  }
}
