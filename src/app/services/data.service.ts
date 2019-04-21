import { Injectable } from '@angular/core';
import { Question } from '../models/questions.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  questions: Question[] ;


  constructor() {
    // this.questions = [
    //   {
    //     text : 'What is your name',
    //     answer : 'My name is arafat',
    //     hide : true
    //   },
    //   {
    //     text : 'What is your Fav Food',
    //     answer : 'I love BBQ' ,
    //     hide : true
    //   }
    // ];
  }
  getQuestions() {
    
    return this.questions ;
  }
  addQuestion(question : Question){
    this.questions.unshift(question);
  }
  removeQuestion(question : Question ){
    this.questions.forEach((element , index ) => {
       if(question == element){
          this.questions.splice(index , 1)
       }
    });
  }
}
