class Quiz {
  constructor(quiz = {}) {
    this.getQuestionStatement = () => quiz.question_statement;
    this.getChoices = () => quiz.choices;
    this.getAnswer = () => quiz.answer;
  }
  propose() {
    return {
      "statement": this.current_quiz.getQuestionStatement(),
      "choices": this.current_quiz.getChoices()
    };
  }
}

export default Quiz;