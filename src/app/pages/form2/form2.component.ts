import { Component , OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HeaderComponent } from 'src/app/shared/header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { FooterComponent } from 'src/app/shared/footer/footer.component';

@Component({
  selector: 'app-form2',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, FormsModule,MatIconModule],
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.scss']
})
export class Form2Component {
  user = {
    PersonalPan: '',
    BusinessPan: '',
    BusinessConstitution: '',
  };

  ngOnInit(): void {

   }

 

  onSubmit() {
    // Handle form submission logic here
    console.log('User:', this.user);
  }
 
}