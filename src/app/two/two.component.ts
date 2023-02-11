import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent  {
  form: FormGroup | any;

  constructor() { }

   ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(''),
      phone: new FormControl(''),
      selectedOption: new FormControl(''),
      firstName: new FormControl(''),
      lastName: new FormControl('')
   })
  }
  
}
