<App>
<div ref="container" data-is={view} app={app} view={view} opt={opt} obs={obs} />
<script>
import QuizTop from './tag/top.tag';
import QuizQuestion from './tag/question.tag';
import QuizResult from './tag/result.tag';
import QuizEnd from './tag/end.tag';
this.obs=opts.obs

this.app=new opts.QuizApp()
this.view="quiztop"
this.opt={}

this.obs.on("page",(page,opt)=>{
  this.view=page
  this.opt=(opt)? opt : this.opt
  this.update()
})
</script>
</App>