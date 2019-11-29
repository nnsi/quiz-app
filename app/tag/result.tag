<QuizResult>
<p>第{count}問は…{(result) ? "正解" : "不正解"}でした！</p>
<input type="button" onclick={onNextButtonClick} value="次へ">
<script>
const app=opts.app
const obs=opts.obs
this.result=opts.opt.result
this.count=app.getCurrentNumber()
this.isGameEnd=app.isGameEnd()

this.onNextButtonClick=()=>{
  if(app.isGameEnd()) obs.trigger("page","quizend")
  else obs.trigger("page","quizquestion")
}
</script>
</QuizResult>