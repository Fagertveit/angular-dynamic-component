import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  public submitForm(event: any): void {
    console.table([event]);
  }
}
