import { Component, } from '@angular/core';
import { interval } from 'rxjs';


@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {
  //i18nSelect 
  nombre: string = 'Edgar';
  genero: string = 'Masculino';
  invitacionMapa = {
    'Masculino': 'invitarlo',
    'Femenino': 'invitarla',
  }
  //i18nPlural
  clientes: string[] = ['Maria', 'Erika', 'Yoselin', 'Karla', 'Brenda', 'Itzel']
  clientesMapa = {
    '=0': 'no hay clientes',
    '=1': 'tenemos un cliente',
    'other': 'tenemos # clientes'
  }

  cambiarPersona() {
    //cambiar genero
    this.genero = this.genero === 'Masculino' ? 'Femenino' : 'Masculino';
    //cambiar nombre
    this.nombre = this.nombre === 'Edgar' ? 'Erika' : 'Edgar';
  }
  borrarCliente() {
    this.clientes.pop();

  }

  //KeyValuePipe
  persona = {
    nombre: 'Edgar',
    edad: 23,
    direccion: 'Puebla, Mexico'
  }

  //JSONPipe
  heroes = [
    {
      nombre: 'Batman',
      vuela: false,
    },
    {
      nombre: 'Superman',
      vuela: true,
    },
    {
      nombre: 'Flash',
      vuela: false,
    }
  ]

  //AsyncPipe
  miObservable = interval(2000); // 0,1,2,3,4

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de una promesa');
    }, 3500);
  });
}
