import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  [x: string]: any;
  submitSpam(title: HTMLInputElement, spam: HTMLInputElement): boolean {
    console.log(`Spam submitted: ${title.value} and link: ${spam.value}`);
  return false;
  }
}
//Per fare il simbolo ` premere ALT + 96 del tastierino numerico

