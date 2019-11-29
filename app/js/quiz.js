class Quiz {
  constructor(quiz) {
    this.getQuestionStatement = () => quiz.question_statement;
    this.getChoices = () => quiz.choices;
    this.getAnswer = () => quiz.answer;
  }
}
export default Quiz = Quiz;