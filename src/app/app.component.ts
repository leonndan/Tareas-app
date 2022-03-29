import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'TAREAS APP';
  msg:string="";

  tarea=[
    {name: "Angular 7.1", descripcion:"Usar Angular y bootstrap",fecha:"23/03/2022"},
    {name: "Analizador Semantico", descripcion:"Ultima fase del compilador",fecha:"23/03/2022"},
    {name: "Ingles", descripcion:"Terminar MyELT",fecha:"23/03/2022"}

  ];

  model:any ={};

  addTarea():void{
    this.tarea.push(this.model);
    this.msg="Campo agregado";

  }
  deleteTarea(i:any):void{
     var answer= confirm("Seguro que deseas eleminar?");
     if(answer){
       this.tarea.splice(i,1);
       this.msg="Campo Eliminado"
     }
  }

  editTarea():void{

  }

  closeAlert(){
    this.msg="";
  }
}
