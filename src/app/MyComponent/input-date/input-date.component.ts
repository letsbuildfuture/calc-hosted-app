import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'app-input-date',
  templateUrl: './input-date.component.html',
  styleUrls: ['./input-date.component.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class InputDateComponent implements OnInit {
  startDate: Date = new Date();
  @Input() fieldValue!: Date;
  @Input() label!: String;
  @Output() valueChange = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    
  }
  updateValue(value: any){
    this.valueChange.emit(this.fieldValue);
  }
 }
