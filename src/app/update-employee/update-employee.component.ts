import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';

@Component({
  selector: 'app-update-employee',
  imports: [],
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css'
})
export class UpdateEmployeeComponent {

  id:Number=0;
  employee:Employee=new Employee();
  constructor(private employeeService:EmployeeService,private route:ActivatedRoute,private router:Router){}

  ngOnInit():void{
    this.id=this.route.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe(data=>{
      this.employee=data;
    })
  }
  onSubmit(){
    this.employeeService.updateEmployee(this.id,this.employee).subscribe(data=>{
      this.employee=data;
      this.gotoEmployeeList();
    })
  }
  gotoEmployeeList(){
    this.router.navigate(['emplist']);
  }
}
