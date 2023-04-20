import { Component } from '@angular/core';
import { SpinnerService } from 'src/app/Services/spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent {
  isLoading$ = this.spinnerService.isLoading$;

  constructor(private readonly spinnerService:SpinnerService)  { }
}
