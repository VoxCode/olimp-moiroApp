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
  st = false;
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
    first: new FormControl(false, Validators.requiredTrue)
  });


  constructor(private _formBuilder: FormBuilder) {
  }

  changeIsAuth(): void {
    this.isAuth = true;
    this.isReg = false;
    this.secondFormGroup.controls.first.patchValue(true);
    this.secondFormGroup.controls.second.patchValue(true);
    this.secondFormGroup.controls.third.patchValue(true);
    this.secondFormGroup.controls.fourth.patchValue(false);
  }

  changeIsReg(): void {
    this.isReg = true;
    this.isAuth = false;
    this.secondFormGroup.controls.first.patchValue(false);
    this.secondFormGroup.controls.second.patchValue(false);
    this.secondFormGroup.controls.third.patchValue(false);
    this.secondFormGroup.controls.fourth.patchValue(true);
  }

  ste(): void {
    this.st = true;
  }
}
