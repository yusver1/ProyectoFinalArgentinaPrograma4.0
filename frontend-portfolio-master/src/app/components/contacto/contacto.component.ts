import { Component } from '@angular/core';
import { PersonaService } from 'src/app/Services/persona.service';
import { TokenService } from 'src/app/Services/token.service';
import { persona } from 'src/app/model/persona.model';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {

  persona: persona = null;

  constructor(public personaService: PersonaService, public tokenService: TokenService) {}

  isLogged = false;

  ngOnInit(): void {
    this.cargarPersona();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarPersona(){
    this.personaService.detail(1).subscribe(data =>
      {this.persona = data}
    )
  }

}
