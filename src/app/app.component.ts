import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = 'Edgar';
  valor: number = 1000

  //triprasoquixa-6595@yopmail.com
  //
  mostrarNombre() {
    // alert(this.valor)
    console.log(this.nombre)
  }
}
