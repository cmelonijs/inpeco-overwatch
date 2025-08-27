import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-configuration',
  imports: [ReactiveFormsModule],
  templateUrl: './new-configuration.html',
  styleUrl: './new-configuration.scss',
})
export class NewConfiguration {
  newConfigurationForm = new FormGroup({
    // firstName: new FormControl(''),
    // lastName: new FormControl(''),
  });
}
