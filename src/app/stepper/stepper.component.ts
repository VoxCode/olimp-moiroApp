import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements OnInit {
  isLinear = true;
  public firstFormGroup: FormGroup = new FormGroup({
    first: new FormControl(false, Validators.requiredTrue),
    second: new FormControl(false, Validators.requiredTrue),
    third: new FormControl(false, Validators.requiredTrue)
  });

  public secondFormGroup: FormGroup = new FormGroup({
    first: new FormControl(false, Validators.requiredTrue),
    second: new FormControl(false, Validators.requiredTrue),
    third: new FormControl(false, Validators.requiredTrue)
  });


  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {

  }
}
