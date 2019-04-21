import { Injectable } from '@angular/core';
import { Question } from '../models/questions.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  questions: Question[];


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
    if (localStorage.getItem('questions') === null) {
      this.questions = [];
    } else {
      this.questions = JSON.parse(localStorage.getItem('questions'));
    }
    return this.questions;
  }
  addQuestion(question: Question) {
    this.questions.unshift(question);
    let questions;
    if (localStorage.getItem('questions') === null) {
      questions = [];
      this.questions.unshift(question);
      localStorage.setItem('questions', JSON.stringify(questions));
    } else {
      questions = JSON.parse(localStorage.getItem('questions'));
      questions.unshift(question);
      localStorage.setItem('questions', JSON.stringify(questions));

    }

  }
  removeQuestion(question: Question) {
    this.questions.forEach((element, index) => {
      if (question == element) {
        this.questions.splice(index, 1);
      localStorage.setItem('questions', JSON.stringify(this.questions));
      }
    });
  }
}
