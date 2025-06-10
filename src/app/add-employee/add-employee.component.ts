import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  imports: [ReactiveFormsModule],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent {
  employeeForm: FormGroup;
  
  constructor(private fb: FormBuilder,private emplyeeService:EmployeeService,private route:Router) {
    this.employeeForm = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      salary: ['', [Validators.required, Validators.min(0)]]
    });
  }

  onSubmit() {
    if (this.employeeForm.valid) {
      console.log('Employee Data:', this.employeeForm.value);
      this.emplyeeService.createEmployee(this.employeeForm.value).subscribe(data=>{
        console.log(data);
        this.gotoEmployeeList();
      });
      alert('Employee added successfully!');
      this.employeeForm.reset();
    } else {
      alert('Please fill in all fields correctly.');
    }
  }
  gotoEmployeeList(){
    this.route.navigate(['emplist']);
  }
}
