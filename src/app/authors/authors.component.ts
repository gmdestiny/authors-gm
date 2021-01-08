import { Component, OnInit, Input,EventEmitter, Output } from '@angular/core';
import { AuthorsService } from '../authors.service';


@Component({
  selector: 'authors',
  templateUrl: './authors.component.html',
  // template: `
  //   <h2>{{ title }}</h2>
  //   <span class ="caption">hi</span>
  //   <ul>
  //     <li *ngFor = "let author of authors">
  //       {{ author }}
  //     </li>
  //   </ul>
  // `,
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  title = "3 Authors";
  authors ;
  @Input() myinputMsg:string;    
  @Output() myOutput:EventEmitter<string>= new EventEmitter();  
   outputMessage:string="I am child component." 
  sendValues(){  
    this.myOutput.emit(this.outputMessage);  
 }  
  constructor(service: AuthorsService) {
      // let service = new AuthorsService();
      this.authors=service.getAuthors();
   }

  ngOnInit() {
    console.log(this.myinputMsg);  
  }

}
