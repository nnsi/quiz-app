/*
― ジャンルを選ぶことができる
― 選択肢を表示して選ばせる
― 正答をその場で表示する
― 10問終わったら正答数を表示する
*/
const QUIZ_DATA = {
  "anime": {
    "name": "アニメ",
    "quiz": [
      {
        "question_statement": "問題文1",
        "answer": 0,
        choices: ["1", "2", "3", "4"]
      },
      {
        "question_statement": "問題文2",
        "answer": 1,
        choices: ["1", "2", "3", "4"]
      },
      {
        "question_statement": "問題文3",
        "answer": 2,
        choices: ["1", "2", "3", "4"]
      },
      {
        "question_statement": "問題文4",
        "answer": 3,
        choices: ["1", "2", "3", "4"]
      }
    ]
  }
};
class Quiz {
  constructor(quiz) {
    this.getQuestionStatement = () => quiz.question_statement;
    this.getChoices = () => quiz.choices;
    this.getAnswer = () => quiz.answer;
  }
}
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
class QuizApp {
  constructor() {
    this.question_max = 0;
    this.player = null;
    this.questioner = null;
    this.question_number = 0;
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
  getGenre() {
    return Object.keys(QUIZ_DATA).map(genre => { return { "id": genre, "name": QUIZ_DATA[genre].name } });
  }
  getQuestion() {
    if (this.question_max === this.question_number) return false;
    try {
      const quiz = this.questioner.giveQuiz()
      this.question_number++;
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
    const question_number = this.question_number;
    this.player = null;
    this.questioner = null;
    this.question_number = 0;
    return {
      "player_name": player_name,
      "collect_count": collect_count,
      "question_number": question_number
    };
  }
}