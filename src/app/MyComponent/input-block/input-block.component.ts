import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-input-block',
  templateUrl: './input-block.component.html',
  styleUrls: ['./input-block.component.css'],
  animations: [
    trigger(
      'inOutAnimation', [
        transition(':enter', [
          style({ height: 0, opacity: 0 }),
            animate('4s ease-in', style({ height: 0, opacity: 0 }))
        ]),
        transition(':leave', [
          style({ height: 300, opacity: 1 }),
            animate('4s ease-out', style({ height: 300, opacity: 1 }))
        ])
      ]
    )
  ]
})
export class InputBlockComponent implements OnInit {
  startDate: Date = new Date();
  endDate: Date = new Date();
  includeWeekendInd: Boolean = true;
  includeLastDayInd: Boolean = false;
  noOfDays!: Number;
  myForm!: FormGroup;
  @Input() inputForm: FormGroup | undefined;
  constructor() { }

  ngOnInit(): void {
  }

  calculate(){
    let startDate = new Date(this.startDate);
    let endDate = new Date(this.endDate);
    let noOfDays = 0;

    if(startDate.getTime() != endDate.getTime()){
      if(!this.includeWeekendInd){
        var nextDay = startDate;
        var cnt = 0;
        do {
            cnt += (nextDay.getDay() >= 1 && nextDay.getDay() <= 5) ? 1 : 0;
            nextDay.setDate(nextDay.getDate() + 1);
        } while (nextDay < endDate);
        noOfDays = cnt;
    } else {
        noOfDays = 
          Math.floor((Date.UTC(endDate.getFullYear(), endDate.getMonth(), endDate.getDate()) - 
            Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate()) ) /(1000 * 60 * 60 * 24));
    }
    if(this.includeLastDayInd){
      noOfDays = noOfDays + 1;
    }
  }
    this.noOfDays = Math.abs(noOfDays);
  }

  updateValue(event :any, model: String) {
    type StatusKey = keyof this;
    let str = model as StatusKey;
    this[str] = event;
  }

}
