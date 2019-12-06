import Player from "./player";
import Questioner from "./questioner";
import QuizCollection from './quiz_collection';

class QuizApp {
  constructor(quiz_collection) {
    this.question_max = 0;
    this.player = null;
    this.questioner = null;
    this.current_number = 0;
    this.quiz_collection = new QuizCollection(quiz_collection);
  }
  getGenre() {
    return this.quiz_collection.getGenre();
  }
  getCurrentNumber() {
    return this.current_number;
  }
  isGameEnd() {
    return this.question_max === this.current_number;
  }
  initialize(genre = "", times = 10) {
    if (!genre) throw Error("ジャンルが選択されていません");
    this.player = new Player();
    this.questioner = new Questioner(this.quiz_collection, genre);
    this.question_max = times;
    return this;
  }
  getQuestion() {
    if (this.question_max === this.current_number) return false;
    const quiz = this.questioner.giveQuiz();
    this.current_number++;
    return quiz;
  }
  answer(input_value = "-1") {
    input_value = Number(input_value);
    return this.player.answer(this.questioner, input_value);
  }
  end() {
    const player_name = this.player.name;
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

export default QuizApp;