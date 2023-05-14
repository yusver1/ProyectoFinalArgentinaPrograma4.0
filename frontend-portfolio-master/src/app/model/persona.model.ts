export class persona {
    id?: number;
    nombre: string;
    apellido: string;
    descripcion: string;
    img: string;
    logo: string;
    ubicacion: string;
    mail: string;
    linkedin: string;
    github: string;

    constructor(nombre: string, apellido: string, descripcion: string, img: string, logo: string, ubicacion: string, mail: string, linkedin: string, github: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.descripcion = descripcion;
        this.img = img;
        this.logo = logo;
        this.ubicacion = ubicacion;
        this.mail = mail;
        this.linkedin = linkedin;
        this.github = github;
    }
}