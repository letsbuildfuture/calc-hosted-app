import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-output-block',
  templateUrl: './output-block.component.html',
  styleUrls: ['./output-block.component.css']
})
export class OutputBlockComponent implements OnInit {
  @Input() output: any;
  constructor() { }

  ngOnInit(): void {
    this.output = Math.abs(this.output);
  }

}
