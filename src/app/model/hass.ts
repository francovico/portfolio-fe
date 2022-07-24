export class Hass {
  id? : number;
  nombrehass : string;
  puntuacionhass : string;

  constructor(nombrehass: string, puntuacionhass: string){
      this.nombrehass = nombrehass;
      this.puntuacionhass = puntuacionhass;
  }
}
