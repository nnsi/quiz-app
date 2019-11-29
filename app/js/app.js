/*
― ジャンルを選ぶことができる
― 選択肢を表示して選ばせる
― 正答をその場で表示する
― 10問終わったら正答数を表示する
*/
import Player from "./player"
import Questioner from "./questioner"
import QUIZ_DATA from "./quiz.json"

class QuizApp {
  constructor() {
    this.question_max = 0;
    this.player = null;
    this.questioner = null;
    this.current_number = 0;
  }
  getGenre() {
    return Object.keys(QUIZ_DATA).map(genre => { return { "id": genre, "name": QUIZ_DATA[genre].name } });
  }
  isGameEnd() {
    return this.question_max === this.current_number;
  }
  getCurrentNumber() {
    return this.current_number;
  }
  initialize(player_name = "", genre = "", times = 10) {
    if (!player_name || !genre) {
      return false;
    }
    this.player = new Player(player_name);
    this.questioner = new Questioner(genre);
    this.question_max = times;
    return this;
  }
  getQuestion() {
    if (this.question_max === this.current_number) return false;
    try {
      const quiz = this.questioner.giveQuiz()
      this.current_number++;
      return quiz;
    } catch (e) {
      console.log(e);
      return false;
    }
  }
  answer(input_value = "") {
    input_value = Number(input_value);
    return this.player.answer(this.questioner, input_value);
  }
  end() {
    const player_name = this.player.name
    const collect_count = this.player.getCollectAnswerCount();
    const current_number = this.current_number;
    this.player = null;
    this.questioner = null;
    this.current_number = 0;
    return {
      "player_name": player_name,
      "collect_count": collect_count,
      "current_number": current_number
    };
  }
}
export default QuizApp = QuizApp;