import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SExperienciaService } from 'src/app/Services/sExperiencia.service';
import { Experiencia } from 'src/app/model/experiencia';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent {
  imageE: string = '';
  tituloE: string = '';
  fechaE: string = '';
  nombreE: string = '';
  descripcionE: string = '';

  constructor(private sExperiencia: SExperienciaService, private router: Router) {}

  ngOnInit():void {
  }

  onCreate(): void {
    const expe = new Experiencia(this.imageE, this.tituloE, this.fechaE, this.nombreE, this.descripcionE);
    this.sExperiencia.save(expe).subscribe({
      next: (data) => {
      alert('Experiencia agregada');
      this.router.navigate(['']);
      },
      error: (err) => {
      alert('Fallo');
      this.router.navigate(['']);
      }
      });
  }
}
