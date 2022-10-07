import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {

  lsUsuarios : any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  agregarUsuario($event: any):void{
    console.log('padre=>' , $event);
   this.lsUsuarios.push($event);
  }

}
