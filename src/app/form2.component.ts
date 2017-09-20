import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DynamicForm } from './dynamic-form.interface';

@Component({
  selector: 'form2',
  templateUrl: './form2.html'
})
export class Form2Component implements DynamicForm {
  @Input() name: string;
  @Input() email: string;
  @Input() description: string;

  @Output() onSubmit: EventEmitter<Object> = new EventEmitter<Object>();

  constructor() { }

  public doSubmit(): void {
    this.onSubmit.emit({
      name: this.name,
      email: this.email,
      description: this.description
    });
  }
}
