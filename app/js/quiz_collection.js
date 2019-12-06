import Quiz from './quiz';

class QuizCollection {
  constructor(quiz_collection = {}) {
    this.collection = quiz_collection;
  }
  getCollection(genre) {
    if (!this.collection[genre]) throw Error("そのジャンルの問題はありません");
    return this.collection[genre];
  }
  getGenre() {
    const QUIZ_DATA = this.collection;
    return Object.keys(QUIZ_DATA).map(genre => { return { "id": genre, "name": QUIZ_DATA[genre].name } });
  }
}

export default QuizCollection;