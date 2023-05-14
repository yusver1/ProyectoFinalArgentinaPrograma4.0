export class Educacion {
    id?: number;
    imageEdu: string;
    cursoEdu: string;
    fechaEdu: string;
    instiEdu: string;
    descrpEdu: string;
    
    constructor(imageEdu: string, cursoEdu: string, fechaEdu: string, instiEdu: string, descrpEdu: string){
        this.imageEdu = imageEdu;
        this.cursoEdu = cursoEdu;
        this.fechaEdu = fechaEdu;
        this.instiEdu = instiEdu;
        this. descrpEdu = descrpEdu;
    }
}