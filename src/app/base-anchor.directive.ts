import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[base-host]'
})
export class BaseDirective {
  // We give the directive a public member for getting access to the DOM
  constructor(public viewContainerRef: ViewContainerRef) { }
}
