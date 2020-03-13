import { Component, OnInit, NgModule, Input } from '@angular/core';
import { EstadosServicio } from 'src/app/servicios/estados.service';
import { EstadosModel } from 'src/app/models/estados.models';
import { PueblosModel } from 'src/app/models/pueblos.model';







@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent implements OnInit {
  @Input() value: number;
 public pueblos:PueblosModel[];



  estados: EstadosModel[] = [
    {id:0,name:'Seleccione un estado'},
    { id: 21, name: 'Aguas Calientes' },
    { id: 4, name: 'Baja California Norte' },
    { id: 5, name: 'Baja California Sur' },
    { id: 6, name: '	Campeche' },
    { id: 7, name: 'Coahuila ' },
    { id: 8, name: 'Colima' },
    { id: 9, name: 'Chiapas' },
    { id: 10, name: '	Chihuahua' },
    { id: 1, name: 'Distrito Federal o Cuidad De mexico' },
    { id: 11, name: 'Durango' },
    { id: 12, name: '	Guanajuato' },
    { id: 13, name: 'Guerrero' },
    { id: 14, name: 'Hidalgo' },
    { id: 15, name: 'Jalisco' },
    { id: 2, name: 'México' },
    { id: 16, name: '	Michoacán de Ocampo' },
    { id: 17, name: 'Morelos' },
    { id: 18, name: 'Nayarit' },
    { id: 19, name: ' Nuevo León' },
    { id: 20, name: 'Oaxaca' },
    { id: 3, name: 'Puebla' },
    { id: 22, name: '	Querétaro' },
    { id: 23, name: 'Quintana Roo' },
    { id: 24, name: 'San Luis Potosí' },
    { id: 25, name: 'Sinaloa' },
    { id: 26, name: 'Sonora' },
    { id: 27, name: '	Tabasco' },
    { id: 28, name: '	Tamaulipas' },
    { id: 29, name: '  	Tlaxcala' },
    { id: 30, name: '	Veracruz de Ignacio de la Llave' },
    { id: 31, name: '	Yucatán' },
    { id: 32, name: 'Zacatecas' }

  ];
  pueblo1: PueblosModel[] = [
    {id:0,name:"Seleccione Estado"},
    { id: 1, name: 'Aguascalientes' },
    { id: 2, name: 'Asientos' },
    { id: 3, name: 'Calvillo' },
    { id: 4, name: 'Cosío' },
    { id: 5, name: '	Jesús María' },
    { id: 6, name: 'Pabellón de Arteaga' },
    { id: 7, name: '	Rincón de Romos' },
    { id: 8, name: '	San José de Gracia' },
    { id: 9, name: 'Tepezalá' },
    { id: 10, name: 'El Llano' },
    { id: 11, name: 'San Francisco de los Romo' }
  ];


  constructor(private estado: EstadosServicio) { }

  ngOnInit(): void {
  }





}




