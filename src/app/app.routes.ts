import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { HomeComponent } from './home/home.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'emplist',component:ListEmployeeComponent},
    {path:'addemp',component:AddEmployeeComponent},
    {path:'updateId/:id',component:UpdateEmployeeComponent},
    {path:'employee-details/:id',component:EmployeeDetailsComponent},
    {path:'**',redirectTo:''}
];
