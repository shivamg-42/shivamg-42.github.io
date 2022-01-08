import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TireData } from '../data';

@Component({
  selector: 'app-tire-form',
  templateUrl: './tire-form.component.html',
  styleUrls: ['./tire-form.component.css']
})
export class TireFormComponent implements OnInit {

  //@Input() tiredata?: TireData;
  name = new FormControl('');
  updateName() {
    this.name.setValue('Nancy');
  }

  tireForm = new FormGroup({

    date: new FormControl(''),
    lf: new FormControl(''),
    lr: new FormControl(''),
    rf: new FormControl(''),
    rr: new FormControl('')


  });

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.tireForm.value);
  }

  


  /* add() {
    const date = Date;
    const lf = this.LeftFront;
    const lr = this.LeftRear;
    const rf = this.RightFront;
    const rr = 0;

    this.tiredata = {
      date: this.date,
      LeftFront: this.lf,
      LeftRear: this.lr,
      RightFront: this.rf,
      RightRear: this.RightRear;


    };
    
    console.log(lf + " " + lr + " " + rf+ " "+ rr);
  } */

  constructor() { }

  ngOnInit(): void {

   

  }

}
