export class Experiencia {
    id? : number;
    nombreexperiencia : string;
    intervalo : string;
    descripcionexperiencia : string;

    constructor(nombreexperiencia: string, intervalo: string, descripcionexperiencia: string){
        this.nombreexperiencia = nombreexperiencia;
        this.intervalo = intervalo;
        this.descripcionexperiencia = descripcionexperiencia;
    }
}
