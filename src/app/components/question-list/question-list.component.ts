import { Question } from './../../models/questions.model';
import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {

// tslint:disable-next-line: ban-types
  questions: Question[] ;


  constructor(private data: DataService) {

  }

  ngOnInit() {
    this.questions = this.data.getQuestions() ;
  }

}
