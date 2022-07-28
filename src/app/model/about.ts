export class About {
  id? : number;
  about : string;
  job : string;

  constructor(about: string, job: string){
      this.about = about;
      this.job = job;
  }
}
