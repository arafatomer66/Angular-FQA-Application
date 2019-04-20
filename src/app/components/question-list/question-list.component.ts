import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {

// tslint:disable-next-line: ban-types
  questions: Object[] ;


  constructor() {
    this.questions = [
      {
        text : 'What is your name',
        answer : 'My name is arafat',
        hide : true
      },
      {
        text : 'What is your Fav Food',
        answer : 'I love BBQ' ,
        hide : true
      }
    ];
  }

  ngOnInit() {
  }

}
