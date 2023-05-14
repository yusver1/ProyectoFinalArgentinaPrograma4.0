import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/Services/portfolio.service';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/Services/token.service';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/Services/persona.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  persona: persona = null;

  isLogged = false;

  constructor(public personaService: PersonaService, private router: Router, private tokenService: TokenService) {}

  ngOnInit(): void {
    this.cargarPersona();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  onLogOut():void{
    this.tokenService.logOut();
    window.location.reload();
  }

  cargarPersona(){
    this.personaService.detail(1).subscribe(data => 
      {this.persona = data}
    )
  }

}
