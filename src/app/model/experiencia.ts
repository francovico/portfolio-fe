export class Experiencia {
    id? : number;
    nombreexperiencia : string;
    descripcionexperiencia : string;

    constructor(nombreexperiencia: string, descripcionexperiencia: string){
        this.nombreexperiencia = nombreexperiencia;
        this.descripcionexperiencia = descripcionexperiencia;
    }
}
