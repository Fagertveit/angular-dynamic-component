import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DynamicForm } from './dynamic-form.interface';

@Component({
  selector: 'form1',
  templateUrl: './form1.html'
})
export class Form1Component implements DynamicForm {
  @Input() name: string;
  @Input() email: string;

  @Output() onSubmit: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  public doSubmit(): void {
    this.onSubmit.emit({
      name: this.name,
      email: this.email
    });
  }
}
