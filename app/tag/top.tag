<QuizTop>
<p>ジャンル:
  <select name="genre" ref="genre">
    <option each={genres} value={id}>{name}</option>
  </select>
  <input type="button" onclick={onQuizStartClick} value="クイズを始める">
<script>
const app=opts.app
const obs=opts.obs
this.genres=app.getGenre()

this.on("before-mount",()=>{
  obs.trigger("title","クイズゲーム")
})

this.onQuizStartClick=()=>{
  if(!this.refs.genre.value){
    return alert("ジャンルを選択してください")
  }
  if(app.initialize(this.refs.genre.value)){
    obs.trigger("page","quizquestion")
  }
}
</script>

</QuizTop>