import { Component, OnInit, NgModule, Input } from '@angular/core';
import { EstadosServicio } from 'src/app/servicios/estados.service';
import { EstadosModel } from 'src/app/models/estados.models';
import { PueblosModel } from 'src/app/models/pueblos.model';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { MesesModel } from 'src/app/models/mes.models';
import { FechaModel } from 'src/app/models/fecha.model';
import { YearModel } from 'src/app/models/year.model';
import { SexoModel } from 'src/app/models/sexo.model';







@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent implements OnInit {
  @Input() value: number;
  nombre:string;
  apellidopaterno:string;
  apellidomaterno:string;
  public cuidades: PueblosModel[] = [
    { id: 0, name: 'seleccione pueblo' }
  ];
  @Input() id: number = 0;
  valor: any;
  valor1: any;
  colonia: string;
  anio:YearModel[]=[
    {year:0}
  ];
  sexos:SexoModel[]=[
    {sexo:'Selecciona'},
    {sexo:'Masculino'},
    {sexo:'Femenino'}
  ];



  estados: EstadosModel[] = [
    { id: 0, name: 'Seleccione un estado' },
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

  mes: MesesModel[] = [
    { id: 0, name: 'Selecciona mes' },
    { id: 1, name: 'Enero' },
    { id: 2, name: 'Febrero' },
    { id: 3, name: 'Marzo' },
    { id: 4, name: 'Abril' },
    { id: 5, name: 'Mayo' },
    { id: 6, name: 'Junio' },
    { id: 7, name: 'Julio' },
    { id: 8, name: 'Agosto' },
    { id: 9, name: 'Septiembre' },
    { id: 10, name: 'Octubre' },
    { id: 11, name: 'Noviembre' },
    { id: 12, name: 'Diciembre' }
  ];

  dias: FechaModel[] = [
    { dia: 0 },
    { dia: 1 },
    { dia: 2 },
    { dia: 3 },
    { dia: 4 },
    { dia: 5 },
    { dia: 6 },
    { dia: 7 },
    { dia: 8 },
    { dia: 9 },
    { dia: 10 },
    { dia: 11 },
    { dia: 12 },
    { dia: 13 },
    { dia: 14 },
    { dia: 15 },
    { dia: 16 },
    { dia: 17 },
    { dia: 18 },
    { dia: 19 },
    { dia: 20 },
    { dia: 21 },
    { dia: 22 },
    { dia: 23 },
    { dia: 24 },
    { dia: 25 },
    { dia: 26 },
    { dia: 27 },
    { dia: 28 },
    { dia: 29 },
    { dia: 30 },
    { dia: 31 }
  ];









  constructor(private estado: EstadosServicio) {
  }


  ngOnInit(): void {
  }

  cambio(id: number) {
    this.valor = id[0] + id[1];

    console.log(id);
    console.log(this.valor);

    this.cuidades = this.estado.seleccionarmunicipio(this.valor);
    console.log("La cuidad es " + this.cuidades);
    return this.cuidades;




  }

  year(){

    return this.anio=this.estado.seleccionyear();


  }


}
