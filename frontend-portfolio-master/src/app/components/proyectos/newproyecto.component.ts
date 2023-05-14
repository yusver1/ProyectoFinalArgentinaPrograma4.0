import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ProyectosService } from 'src/app/Services/proyectos.service';
import { Proyectos } from 'src/app/model/proyectos';

@Component({
  selector: 'app-newproyecto',
  templateUrl: './newproyecto.component.html',
  styleUrls: ['./newproyecto.component.css']
})
export class NewproyectoComponent {

  imagenProy: string;
  tituloProy: string;
  descripProy: string;
  tecnoProy: string;
  fechaProy: string;
  urlProy: string;

  constructor(private proyectosService: ProyectosService, private router: Router) {}

  onCreate(): void{
    const proyectos = new Proyectos(this.imagenProy, this.tituloProy, this.descripProy, this.tecnoProy, this.fechaProy, this.urlProy);
    this.proyectosService.save(proyectos).subscribe(data =>{
      alert("Proyecto añadido correctamente");
      this.router.navigate(['']);
    }, err => {
      alert("falló");
      this.router.navigate([''])
    }
    )
  }

}
