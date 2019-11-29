import Quiz from "./quiz"
import QUIZ_DATA from "./quiz.json"

class Questioner {
  constructor(genre) {
    if (!QUIZ_DATA[genre]) throw Error("そのジャンルの問題はありません");
    this.questions = JSON.parse(JSON.stringify(QUIZ_DATA[genre]));
    this.current_quiz = null;
  }
  giveQuiz() {
    const quiz = this.questions.quiz.splice(Math.floor(Math.random() * this.questions.quiz.length), 1)[0];
    if (!quiz) throw Error("クイズが空です");
    this.current_quiz = new Quiz(quiz);
    return this.current_quiz;
  }
  judgeQuiz(answer) {
    return this.current_quiz.getAnswer() === answer;
  }
}
export default Questioner = Questioner;