import { Component } from '@angular/core';
import { PortfolioService } from 'src/app/Services/portfolio.service';
import { EducacionService } from 'src/app/Services/sEducacion.service';
import { TokenService } from 'src/app/Services/token.service';
import { Educacion } from 'src/app/model/educacion';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent {
  
  educacion: Educacion[] = [];

  constructor(private educacionS: EducacionService, private tokenService: TokenService) {}

  isLogged = false;

  ngOnInit(): void {
    this.cargarEdu();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarEdu(): void{
    this.educacionS.lista().subscribe(data => {this.educacion = data;})
  }

  delete(id?: number){
    if(id != undefined){
      this.educacionS.delete(id).subscribe(data => {this.cargarEdu();}, err => { alert("No se pudo eliminar");})
    }
  }

}
