import { Component, OnInit, Output ,EventEmitter } from '@angular/core';

import { Question } from 'src/app/models/questions.model';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
  @Output() questionAdded = new EventEmitter<Question>();

  text : string ;
  answer : string ;
  constructor() { }

  ngOnInit() {
  }
  reset(){
    this.text = '' ;
    this.answer = '' ;
  }
  addQuestion(){
    
    this.questionAdded.emit({
      text : this.text ,
      answer : this.answer,
      hide : true 
    });
    this.reset();
  }

}
