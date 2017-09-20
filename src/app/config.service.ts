import { Injectable } from '@angular/core';
import { Form1Component } from './form1.component';
import { Form2Component } from './form2.component';
import { DynamicFormClass } from './dynamic-form.class';

@Injectable()
export class ConfigService {
  // Here we choose which component we want to use in the dynamic component
  // in this instance we can use either Form1Component or Form2Component
  public getConfig(): any {
    return new DynamicFormClass(Form2Component);
  }
}
