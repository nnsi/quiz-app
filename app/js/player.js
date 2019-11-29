class Player {
  constructor(name = "名無しさん") {
    this.name = name;
    this.correct_answer_count = 0;
  }
  answer(questioner = Questioner, answer) {
    const judge = questioner.judgeQuiz(answer);
    this.correct_answer_count += (judge) ? 1 : 0;
    return judge;
  }
  getCollectAnswerCount() {
    return this.correct_answer_count;
  }
}
export default Player = Player;