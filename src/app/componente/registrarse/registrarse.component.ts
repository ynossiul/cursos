import { Component, OnInit, NgModule } from '@angular/core';
import { Estados } from 'src/app/servicios/estados-service';





@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent implements OnInit {

  // tslint:disable-next-line: max-line-length





  constructor(public estado: Estados) { }

  ngOnInit(): void {
  }


}
