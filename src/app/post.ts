import { DatePipe } from "../../node_modules/@angular/common";

export class Post {
  constructor(public titre: string, 
              public content: string, 
              public auteur: string, 
              public loveIts: number, 
              public created_at: Date){}
  } 