import { Component } from '@angular/core';
import { HabblandasService } from 'src/app/Services/habblandas.service';
import { HabdurasService } from 'src/app/Services/habduras.service';
import { IdiomasService } from 'src/app/Services/idiomas.service';
import { TokenService } from 'src/app/Services/token.service';
import { Habblandas } from 'src/app/model/habblandas';
import { Habduras } from 'src/app/model/habduras';
import { Idiomas } from 'src/app/model/idiomas';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent {

  habblandas: Habblandas[] = [];
  habduras: Habduras[] = [];
  idiomas: Idiomas[] = [];

  constructor(private habblandasService: HabblandasService, private habdurasService: HabdurasService, private idiomasService: IdiomasService, private tokenService: TokenService) {}

  isLogged = false;

  ngOnInit(): void{
    this.cargarHabblandas();
    this.cargarHabduras();
    this.cargarIdiomas();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarHabblandas(): void{
    this.habblandasService.lista().subscribe(data =>{
      this.habblandas = data;
    })
  }

  cargarHabduras(): void{
    this.habdurasService.lista().subscribe(data =>{
      this.habduras = data;
    })
  }

  cargarIdiomas(): void{
    this.idiomasService.lista().subscribe(data =>{
      this.idiomas = data;
    })
  }

  deleteHabblandas(id?: number){
    if(id != undefined){
      this.habblandasService.delete(id).subscribe(data =>{
        this.cargarHabblandas();
      }, err => {
        alert("No se pudo eliminar");
      }
      )
    }
  }

  deleteHabduras(id?: number){
    if(id != undefined){
      this.habdurasService.delete(id).subscribe(data =>{
        this.cargarHabduras();
      }, err => {
        alert("No se pudo eliminar");
      }
      )
    }
  }

  deleteIdiomas(id?: number){
    if(id != undefined){
      this.idiomasService.delete(id).subscribe(data =>{
        this.cargarIdiomas();
      }, err => {
        alert("No se pudo eliminar");
      }
      )
    }
  }

}
