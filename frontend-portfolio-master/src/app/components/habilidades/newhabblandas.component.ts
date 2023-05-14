import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HabblandasService } from 'src/app/Services/habblandas.service';
import { Habblandas } from 'src/app/model/habblandas';

@Component({
  selector: 'app-newhabblandas',
  templateUrl: './newhabblandas.component.html',
  styleUrls: ['./newhabblandas.component.css']
})
export class NewhabblandasComponent {
  nombreHB: string;
  descripHB: string;

  constructor(private habblandasService: HabblandasService, private router: Router) {}

  onCreate(): void{
    const habblandas = new Habblandas(this.nombreHB, this.descripHB);
    this.habblandasService.save(habblandas).subscribe(data =>{
      alert("Habilidad blanda añadida correctamente");
      this.router.navigate(['']);
    }, err => {
      alert("falló");
      this.router.navigate([''])
    }
    )
  }
}
