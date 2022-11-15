import { Component, OnInit } from '@angular/core';
import quizz_questions from "../../../assets/data/quizz_questions.json"

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})
export class QuizzComponent implements OnInit {
  title: string = ''
  questions: any
  selectedQuestion: any = ''
  answers: string[] = []
  selectedAnswer: string = ''
  index = 0
  maxIndex = 0


  respA = 0
  respB = 0

  finalizado: boolean = false
  constructor() { }
  ngOnInit(): void {

    if (quizz_questions) {
      this.finalizado = false
      this.title = quizz_questions.title
      this.questions = quizz_questions.questions
      this.index = 0
      this.maxIndex = this.questions.length

      this.selectedQuestion = this.questions[this.index]
    }


  }
  getChoice(option: string) {
    this.answers.push(option)
    console.log(this.answers)
    this.nexstep()
  }
  nexstep() {
    this.index += 1
    if (this.maxIndex > this.index) {
      this.selectedQuestion = this.questions[this.index]
    } else {
      this.finalizado = true
      this.checkResult(this.answers)
    }
  }
  async checkResult(answers: string[]) {
    console.log(this.respA)
    for (let elem of answers) {
      if (elem == 'A')
        this.respA += 1
      else
        this.respB += 1
    }
    if (this.respA > this.respB)
      this.selectedAnswer = quizz_questions.results['A']
    else
      this.selectedAnswer =  quizz_questions.results['B']
  }
}