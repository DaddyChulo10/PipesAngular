import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {
  nombreLower: string = 'juan';
  nombreUpper: string = 'Fernando';
  nombreCompleto: string = 'juAn FerNanDo';
  fecha: Date = new Date();
}
