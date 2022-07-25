export class Education {
  id? : number;
  institucion : string;
  intervalo : string;
  descripcion : string;

  constructor(institucion: string, intervalo: string, descripcion: string){
      this.institucion = institucion;
      this.intervalo = intervalo;
      this.descripcion = descripcion;
  }
}
