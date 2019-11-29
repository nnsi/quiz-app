<QuizTop>
名前:<input type="text" id="name" ref="name" value="test"><br>
ジャンル:
<select name="genre" ref="genre">
  <option each={genres} value={id}>{name}</option>
</select><br>
<input type="button" onclick={onQuizStartClick} value="クイズを始める">
<script>
const app=opts.app
const obs=opts.obs
this.genres=app.getGenre()

this.onQuizStartClick=()=>{
  if(!this.refs.name.value){
    return alert("名前を入力してください")
  }
  if(app.initialize(this.refs.name.value,this.refs.genre.value,3)){
    obs.trigger("page","quizquestion")
  }
}
</script>
</QuizTop>