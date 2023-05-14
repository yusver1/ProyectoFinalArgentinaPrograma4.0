import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProyectosService } from 'src/app/Services/proyectos.service';
import { Proyectos } from 'src/app/model/proyectos';

@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})
export class EditProyectoComponent {

  proyecto: Proyectos = null;

  constructor(private proyectosService: ProyectosService, private activatedRouter: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyectosService.detail(id).subscribe(data => {
      this.proyecto = data;
    }, err => {
      alert("Error al modificar");
      this.router.navigate(['']);
    })
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyectosService.update(id, this.proyecto).subscribe(data =>{
      this.router.navigate(['']);
    }, err => {
      alert("Error al modificar el proyecto");
      this.router.navigate(['']);
    })
  }
}
