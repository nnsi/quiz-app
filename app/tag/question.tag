<QuizQuestion>
<p>第{count}問</p>
<p>{statement}</p>
<virtual each={choice,i in choices}>
<input type="radio" name="choice" value={i} onchange={onAnswerChange}>{choice}<br>
</virtual>
<input onclick={onAnswerClick} type="button" value="回答する">
<script>
const app=opts.app
const obs=opts.obs
this.quiz=app.getQuestion()
this.statement=this.quiz.getQuestionStatement()
this.choices=this.quiz.getChoices()
this.count=app.getCurrentNumber()
this.answer=null

this.onAnswerChange=(e)=>{
  this.answer=e.target.value
}
this.onAnswerClick=()=>{
  if(!this.answer) return alert("回答を選択してください")
  obs.trigger("page","quizresult",{
    "result":app.answer(this.answer)
  })
}
</script>
</QuizQuestion>