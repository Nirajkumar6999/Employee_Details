import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListEmployeeComponent } from "./list-employee/list-employee.component";
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { AddEmployeeComponent } from './add-employee/add-employee.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HttpClientModule, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Emplyee_details';
}
