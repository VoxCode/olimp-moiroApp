import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {BreakpointObserver} from "@angular/cdk/layout";
import {Observable} from "rxjs";
import {StepperOrientation} from '@angular/material/stepper';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements OnInit{
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
    third: new FormControl(false, Validators.requiredTrue)
  });

  public fourthFormGroup: FormGroup = new FormGroup({
    first: new FormControl(false, Validators.requiredTrue)
  });

  stepperOrientation: Observable<StepperOrientation>;


  constructor(private _formBuilder: FormBuilder, breakpointObserver: BreakpointObserver) {
    this.stepperOrientation = breakpointObserver.observe('(min-width: 800px)')
      .pipe(map(({matches}) => matches ? 'horizontal' : 'vertical'));
  }

  ngOnInit(): void {
    this.isReg = false;
    this.isAuth = false;
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
