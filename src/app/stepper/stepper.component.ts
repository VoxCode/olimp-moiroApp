import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent {
  isLinear = true;
  isReg = false;
  isAuth = false;
  public firstFormGroup: FormGroup = new FormGroup({
    first: new FormControl(false, Validators.requiredTrue)
  });

  public secondFormGroup: FormGroup = new FormGroup({
    first: new FormControl(false, Validators.requiredTrue),
    second: new FormControl(false, Validators.requiredTrue),
    third: new FormControl(false, Validators.requiredTrue),
    fourth: new FormControl(false, Validators.requiredTrue)
  });

  public thirdFormGroup: FormGroup = new FormGroup({
    first: new FormControl(false, Validators.requiredTrue),
    second: new FormControl(false, Validators.requiredTrue),
    third: new FormControl(false, Validators.requiredTrue),
    fourth: new FormControl(false, Validators.requiredTrue)
  });

  public fourthFormGroup: FormGroup = new FormGroup({
    first: new FormControl(false, Validators.requiredTrue),
    second: new FormControl(false, Validators.requiredTrue),
    third: new FormControl(false, Validators.requiredTrue),
  });


  constructor(private _formBuilder: FormBuilder) {
  }

  changeIsAuth(): void {
    this.isAuth = !this.isAuth;
  }

  changeIsReg(): void {
    this.isReg = !this.isReg;
  }
}
