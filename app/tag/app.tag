<App>
<h1>{title}</h1>
<div ref="container" data-is={view} app={app} view={view} opt={opt} obs={obs} />
<script>
import './top.tag';
import './question.tag';
import './result.tag';
import './end.tag';

this.obs=opts.obs
this.app=opts.QuizApp
this.view="quiztop"
this.title=""
this.opt={}

this.obs.on("title",title=>{
  this.title=title
  this.update()
})

this.obs.on("page",(page,opt)=>{
  this.view=page
  this.opt=(opt)? opt : this.opt
  this.update()
})

window.onerror = e => {
  alert(e)
  if(this.view!=="quiztop") alert("トップ画面に戻ります")
  this.view="quiztop"
  this.update()
}
</script>
</App>