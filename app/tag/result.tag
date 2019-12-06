<QuizResult>
<p>第{count}問は…{(result.result) ? "正解" : "不正解"}でした！</p>
<p if={!result.result}>正解は「{result.correct_answer}」でした</p>
<input type="button" onclick={onNextButtonClick} value="次へ">
<script>
const app=opts.app
const obs=opts.obs
this.result=opts.opt.result
this.count=app.getCurrentNumber()
this.isGameEnd=app.isGameEnd()

this.on("before-mount",()=>{
  obs.trigger("title",`第${this.count}問`)
})

this.onNextButtonClick=()=>{
  if(app.isGameEnd()) obs.trigger("page","quizend")
  else obs.trigger("page","quizquestion")
}
</script>
</QuizResult>