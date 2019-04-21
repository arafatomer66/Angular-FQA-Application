import { Component, OnInit, Input } from '@angular/core';
import { Question } from 'src/app/models/questions.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
// tslint:disable-next-line: no-input-rename
  @Input('question') question : Question ;
  constructor(private data : DataService ) { }

  ngOnInit() {
  }

  removeQuestion(question : Question){
    this.data.removeQuestion(question);
  }

}
