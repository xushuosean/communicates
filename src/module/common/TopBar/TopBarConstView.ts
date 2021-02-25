class TopBar extends BaseEuiView {  
  public returnBtn:eui.Group;
  public progressBarGroup:eui.Group;
  public percentLabel:eui.Label;
  public percentRect:eui.Rect;
  public sceneReviewBtn:eui.Group

  /*阶段分组*/
  public stage1:eui.Group;
  public stage1Rect:eui.Rect
  public stage1Label:eui.Label

  public stage2:eui.Group;
  public stage2Rect:eui.Rect
  public stage2Label:eui.Label

  public stage3:eui.Group;
  public stage3Rect:eui.Rect
  public stage3Label:eui.Label


  public stage2ArrowImg:eui.Image
  public stage3ArrowImg:eui.Image

  //控制阶段背景和字体颜色：默认和高亮。
  private stageLightBgColor = 0xd4c8c4;
  private stageLightColor = 0xfdfdfd;
  private stageEmphasisBgColor = 0xeb7f41;
  private stageEmphasisColor = 0xcdc8ed;
  private sceneReviewContainer :any;
  //场景回顾label
  public sceneReviewLabel:eui.Label;
  constructor($controller:BaseController, $parent:eui.Group) {
    super($controller, $parent);
    this.skinName = "resource/ddi_skins/TopBar.exml"
    this.sceneReviewLabel.text = "场景回顾"
  }  
  initData(): void {
    super.initData();
  }
  initUI(): void {
    super.initUI();
    this.initUIEvent();
    //实例化webView
    this.sceneReviewContainer = new SinglewWebView();
    //根据保存点初始化页面内容
    const savePoint = App.Savepoint.takeSavepoint();
    if(savePoint){
        const stageNumber = savePoint.stageNumber;
        const percentNumber = savePoint.percentNumber;
        this.setCurrentStage(stageNumber)
        this.setPercent(percentNumber)
    }else{
      //默认第一阶段，0%
      this.setCurrentStage(1)
      this.setPercent(0)
    }
    //初始化阶段个数
    this.initPhaseCount();
  }
  initPhaseCount(){
    // const simulationID = App.UserInfo.takeUserInfo().simulationId;
    // Api.Simulation.getPhaseConfig(simulationID).then(response=>{
    //   console.log(response);
      //根据返回的数组length，设置阶段数
      // this.setStageCount((response as any).length)
    // })
    const simulationID = App.UserInfo.takeUserInfo().simulationId;
    Api.Simulation.getPhaseConfig(simulationID).then(response=>{
      console.log(response);
      //根据返回的数组length，设置阶段数
      this.setStageCount((response as any).length);
      
      //模拟步长
      const stageOneStep = 5;
      const stageTwoStep = 6;
      const stageThreeStep = 11;
      App.Step.stepMap = {
        stageOneStep:stageOneStep,
        stageTwoStep:stageTwoStep,
        stageThreeStep:stageThreeStep
      }
    })
  }
  /* 点击事件 */
  initUIEvent(){
    this.returnBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, (e:egret.Event) => {
      e.stopImmediatePropagation()
      App.ViewManager.open(ViewConst.TopBarPopup1)
    }, this)
    this.sceneReviewBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, (e:egret.Event) => {
      e.stopImmediatePropagation()
      
      const simulationId = App.UserInfo.takeUserInfo().simulationId;
      const userId = App.UserInfo.takeUserInfo().userId;

      // Api.Simulation.checkCard(simulationId, userId).then((response) => {
      //   if (response) {
      //     //存在，保存cardId,根据保存点跳转页面
      //     const localRes  = response as any;
      //     this.sceneReviewContainer.open(localRes.scenarioReview ||"")
      //   }
      // })
      Api.Simulation.getSceneReview(App.UserInfo.takeCardId()).then((response) => {
        if (response) {
          //存在，保存cardId,根据保存点跳转页面
          const localRes  = response as any;
          this.sceneReviewContainer.open(localRes.scenarioReview ||"")
        }
      })
      
    }, this)
  }
  /* 切换进度条的可见性 */
  public toggleProgressBarVisibiity(visible:boolean){
    this.progressBarGroup.visible = visible;
  } 
  public setPercent(percent:number){
    this.percentRect.percentWidth = percent;
    this.percentLabel.text = percent+'%';
  }
  /*目前最多可设置三个阶段*/
  public setStageCount(stageCount:number){
    //
    switch(stageCount){
      case 1:
        //隐藏后两个
        this.stage2.visible = false;
        this.stage3.visible = false;
        break;
      case 2:
        //隐藏最后一个
        this.stage3.visible = false;
        break;
      case 3:
        //什么都不做，默认三个阶段全部展示
    }
  }
  public setCurrentStage(stageNum:number){
    //箭头处理
    this.stage2ArrowImg.source = this.stage3ArrowImg.source = "progress-arrow_png"
    
    switch(stageNum){
      case 1:
        this.stage1Rect.fillColor = this.stageEmphasisBgColor;
        this.stage1Label.textColor = this.stageEmphasisColor;

        this.stage2Rect.fillColor = this.stage3Rect.fillColor = this.stageLightBgColor
        this.stage2Label.textColor = this.stage3Label.textColor = this.stageLightColor

        
        break;
      case 2:
        this.stage1Rect.fillColor = this.stage2Rect.fillColor = this.stageEmphasisBgColor;
        this.stage1Label.textColor = this.stage2Label.textColor = this.stageEmphasisColor;

        this.stage3Rect.fillColor = this.stageLightBgColor
        this.stage3Label.textColor = this.stageLightColor
        this.stage2ArrowImg.source = "progress-arrow_active_png"
        break;
      case 3:
          this.stage1Rect.fillColor = this.stage2Rect.fillColor = this.stage3Rect.fillColor = this.stageEmphasisBgColor;
          this.stage1Label.textColor =  this.stage2Label.textColor = this.stage3Label.textColor = this.stageEmphasisColor;
          this.stage3ArrowImg.source = this.stage2ArrowImg.source = "progress-arrow_active_png"
          break;
    }
  }
}