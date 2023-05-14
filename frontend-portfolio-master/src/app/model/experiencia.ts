export class Experiencia {
    id?: number;
    imageE: string;
    tituloE: string;
    fechaE: string;
    nombreE: string;
    descripcionE: string;

    constructor(imageE: string, tituloE: string, fechaE: string, nombreE: string, descripcionE: string){
        this.imageE = imageE;
        this.tituloE = tituloE;
        this.fechaE = fechaE;
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
    }

}
