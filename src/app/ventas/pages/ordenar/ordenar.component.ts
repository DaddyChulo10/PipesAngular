import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {
  valor: boolean = false;
  ordenarPor: string = '';
  heroes: Heroe[] = [
    {
      nombre: 'Spiderman',
      vuela: false,
      color: Color.violeta
    },
    {
      nombre: 'Hulk',
      vuela: false,
      color: Color.verde
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Aquaman',
      vuela: true,
      color: Color.azul
    },

    {
      nombre: 'Daredevil',
      vuela: true,
      color: Color.morado
    },

    {
      nombre: 'Ironman',
      vuela: true,
      color: Color.rojo
    },

  ]

  cambiar() {
    this.valor = !this.valor;
  }

  cambiarOrden(valor: string) {
    this.ordenarPor = valor;
  }


}
