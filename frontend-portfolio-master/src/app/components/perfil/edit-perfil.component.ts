import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonaService } from 'src/app/Services/persona.service';
import { persona } from 'src/app/model/persona.model';

@Component({
  selector: 'app-edit-perfil',
  templateUrl: './edit-perfil.component.html',
  styleUrls: ['./edit-perfil.component.css']
})
export class EditPerfilComponent {

  persona: persona = null;

  constructor(private activatedRouter: ActivatedRoute, private personaService: PersonaService, private router: Router) {}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaService.detail(id).subscribe(
      data => { 
        this.persona = data;
    }, err => {
      alert("Errora al modificar el perfil");
      this.router.navigate(['']);
    })
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaService.update(id, this.persona).subscribe({
      next: (data) => {
        this.router.navigate(['']);
      },
      error: (err) => {
        alert("Error al modificar el perfil");
        this.router.navigate(['']);
      }
    });       
  }

  uploadImage($event: any){
    
  }
}
