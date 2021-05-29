import { Component, Input, OnInit, OnChanges} from '@angular/core';

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
  ngOnChanges() {
    this.calculateDateTime(this.output);
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

    

    let months = (startDate.getFullYear() - endDate.getFullYear()) * 12;
    months -= startDate.getMonth();
    months += endDate.getMonth();
    months = months <= 0 ? 0 : months;
    let monthsAndDays = Math.abs(startDate.getDate() - endDate.getDate());
    this.outputMonths = months>0? monthsAndDays>0 ? "or,  " + months + " Months and "+monthsAndDays + " Days" : "or,  " + months+" Months" : "";

    let weeks = Math.floor(days/7);
    let weekAndDays = Math.floor(days%7);
    this.outputWeeks = weeks > 0 ? weekAndDays>0 ? "or,  " + weeks + " Weeks and "+weekAndDays+" Days" : "or/ " + weeks + " Weeks" : "";

    years = Math.abs(startDate.getFullYear() - endDate.getFullYear());
    years = years > 0 ? "or, " + years + " Years" : "";
    yearsAndMonth = Math.abs(startDate.getMonth() - endDate.getMonth());
    yearsAndMonth = yearsAndMonth > 0 ? " and " + yearsAndMonth + " Months" : "";
    yearsAndMonthAndDays = Math.abs(startDate.getDate() - endDate.getDate());
    yearsAndMonthAndDays = yearsAndMonthAndDays > 0 ? " and " + yearsAndMonthAndDays + " Days" : "";
    this.outputYears = years + yearsAndMonth + yearsAndMonthAndDays ;
  }

}
