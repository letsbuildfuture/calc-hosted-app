import { Component, Input, OnInit, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-output-block',
  templateUrl: './output-block.component.html',
  styleUrls: ['./output-block.component.css']
})
export class OutputBlockComponent implements OnInit {
  @Input() output: any;
  @Input() startDate: any;
  @Input() endDate: any;
  outputHrs?: any;
  outputWeeks: any;
  outputMonths: any;
  outputYears: any;
  constructor() { }

  ngOnInit(): void {
    this.calculateDateTime(this.output);
  }
  ngOnChanges(changes: SimpleChanges) {
    if(changes != null && changes.output){
      this.calculateDateTime(this.output);
    }
    
  }

  daysInMonth(month: any, year: any) {
    return new Date(year, month, 0).getDate();
}

  calculateDateTime(outputDays: any){
    let days=outputDays;
    let startDate=new Date(this.startDate);
    let endDate=new Date(this.endDate);
    let years: any;
    let yearsAndMonth: any;
    let yearsAndMonthAndDays: any;
    this.output = Math.abs(days);
    this.outputHrs = days>0? "or, " + 24*days + " Hours" : "";

    years = Math.abs(startDate.getFullYear() - endDate.getFullYear());
    let yearsStr = years > 0 ? "or, " + years + " Years" : "";
    yearsAndMonth = Math.abs(startDate.getMonth() - endDate.getMonth());
    let yearsAndMonthStr = years > 0 && yearsAndMonth > 0 ? " and " + yearsAndMonth + " Months" : "";
    yearsAndMonthAndDays = Math.abs(startDate.getDate() - endDate.getDate());
    let yearsAndMonthAndDaysStr = years > 0 && yearsAndMonthAndDays > 0 ? " and " + yearsAndMonthAndDays + " Days" : "";
    this.outputYears = yearsStr + yearsAndMonthStr + yearsAndMonthAndDaysStr ;

    let noOfDaysInMonth = this.daysInMonth(endDate.getMonth(), endDate.getFullYear());
    if(Math.floor(days/noOfDaysInMonth) > 0){
      //let months = Math.floor(days/noOfDaysInMonth);
      let months = (years*12) + yearsAndMonth;
      let monthsAndDays = endDate.getDate() - startDate.getDate();
      if(monthsAndDays < 0){
        let noOfDaysInPrevMonth = this.daysInMonth(endDate.getMonth()-1, endDate.getFullYear());
        monthsAndDays = noOfDaysInPrevMonth + monthsAndDays;
      }
      this.outputMonths = months>0 ? monthsAndDays>0 && Math.floor(months/12)>0 ? "or,  " + months + " Months and "+monthsAndDays + " Days" : "or,  " + months+" Months" : "";
    } else {
      this.outputMonths = "";
    }
    
    let weeks = Math.floor(days/7);
    let weekAndDays = Math.floor(days%7);
    this.outputWeeks = weeks > 0 ? weekAndDays>0 ? "or,  " + weeks + " Weeks and "+weekAndDays+" Days" : "or, " + weeks + " Weeks" : "";

    
  }

}
