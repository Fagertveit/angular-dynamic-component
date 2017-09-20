import { Type } from '@angular/core';

export class DynamicFormClass {
  // We use this constructor when creating a new component in code
  constructor(public component: Type<any>) {}
}
