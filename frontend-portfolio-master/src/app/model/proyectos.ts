export class Proyectos {
    id?: number;
    imagenProy: string;
    tituloProy: string;
    descripProy: string;
    tecnoProy: string;
    fechaProy: string;
    urlProy: string;

    constructor(imagenProy: string, tituloProy: string, descripProy: string, tecnoProye: string, fechaProy: string, urlProy: string){
        this.imagenProy = imagenProy;
        this.tituloProy = tituloProy;
        this.descripProy = descripProy;
        this.tecnoProy = tecnoProye;
        this.fechaProy = fechaProy;
        this.urlProy = urlProy;
    }
}
