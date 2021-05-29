import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toggle-slider',
  templateUrl: './toggle-slider.component.html',
  styleUrls: ['./toggle-slider.component.css']
})
export class ToggleSliderComponent implements OnInit {
  @Input() label!: String;
  @Input() value!: any;
  @Output() valueChange = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
  toggleValue(value: any){
    this.valueChange.emit(this.value);
  }
}
