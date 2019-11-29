<QuizEnd>
<p>クイズ終了</p>
<p>成績は{result.collect_count} / {result.current_number}でした！</p>
<p><input type="button" onclick={onMoreGameButtonClick} value="もう一回やる">
<script>
const app=opts.app
const obs=opts.obs
this.result=app.end()

this.onMoreGameButtonClick=()=>{
  obs.trigger("page","quiztop")
}
</script>
</QuizEnd>