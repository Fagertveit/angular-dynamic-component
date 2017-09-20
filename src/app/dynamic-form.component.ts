import { Component, Input, Output, EventEmitter, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { BaseDirective } from './base-anchor.directive';
import { DynamicForm } from './dynamic-form.interface';
import { ConfigService } from './config.service';
import { Form1Component } from './form1.component';
import { Form2Component } from './form2.component';

@Component({
  selector: 'dynamic-form',
  template: `
  <div>
    <ng-template base-host></ng-template>
  </div>
  `
})
export class DynamicFormComponent implements DynamicForm {
  // The dynamic member parameters enforced through DynamicForm interface
  @Input() name: string;
  @Input() email: string;
  @Input() description: string = 'Optional';

  @Output() onSubmit: EventEmitter<any> = new EventEmitter<any>();

  // This is our hook to the DOM
  @ViewChild(BaseDirective) baseHost: BaseDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private config: ConfigService) { }

  ngOnInit() {
    // ngOnInit loads the selected component
    this.loadComponent();
  }

  private loadComponent(): void {
    // First we fetch the configured component from our config service
    let config = this.config.getConfig();

    // Here we resolve our component in the angular componentFactory and create
    // a local reference to our DOM
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(config.component);
    let viewContainerRef = this.baseHost.viewContainerRef;

    // We clear our DOM
    viewContainerRef.clear();

    // Here we actually create our component and attaches it to the DOM through
    // our DOM hook.
    let componentRef = viewContainerRef.createComponent(componentFactory);

    // This is where we set our input/outputs, as you can see we use the
    // DynamicForm interface to know what members the component has, the last
    // set is for the output. This is an Observable that we can subscribe to,
    // in this implementation it will emit the same data to it's parent.
    (<DynamicForm>componentRef.instance).name = this.name;
    (<DynamicForm>componentRef.instance).email = this.email;
    (<DynamicForm>componentRef.instance).description = this.description;
    (<DynamicForm>componentRef.instance).onSubmit.subscribe(result => {
      this.onSubmit.emit(result);
    });
  }
}
