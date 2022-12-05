import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  articles = new Array<string>(); //Dichiaro un array di stringhe
  submitSpam(usless: HTMLInputElement, num: HTMLInputElement): boolean {
    console.log(`spamText: ${usless.value} and spamNum: ${num.value}`); //Questa notazione permette di inserire il contenuto di variabili dentro a stringhe (usare ALT + 96 per le virgolette)
    let cont = Number(num.value); // Converte stringhe in numeri
    return false;
    for(let i:number =0; i< cont; i++)  //Ciclo For in typescript
 {
      //Qualcosa
 }
  }
}
//Per fare il simbolo ` premere ALT + 96 del tastierino numerico

