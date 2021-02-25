class partThreeNPCView extends DDI.BaseTalk {

  public alphaLabel: eui.Label;

  public constructor($controller:BaseController, $parent:eui.Group) {
    super($controller, $parent)
  }

  public initTalk(): void {
    super.initTalk();
    CommonInit.initTalk({
      borderWidth: 2,
      borderColor: Common.KESHENG,
      marginBottom: 45,
      backgroundAlpha: 1,
      hrTop: 150,
      buttonPosition: DDI.POSITION.RIGHT
    }, this)

  }

  public startTyped(): void {
    super.startTyped();
    setTimeout(() => {
      App.ControllerManager.applyFunc(ControllerConst.PartThreeHome, PartThreeHomeConst.banTouch, true)
    }, 300);
  }

  public startAnimation(): void {
    //动画执行过程中 添加遮盖防止过快点击
    App.DecisionCover.loading(window['stage'], '',0.0000000001)
    // 控制label框的动效
    this.label.alpha = 0;
    App.TweenUtils.enLarge(this.contentGroup).call(()=>{
      this.label.alpha = 1;
      this.startType()
      App.DecisionCover.hideLoadingfalse()
    })
  }

  public beforeStartType(): void {
    super.beforeStartType();
    App.ControllerManager.applyFunc(ControllerConst.PartThreeHome, PartThreeHomeConst.banTouch, false);
  }

  public beforeOut(): void {
    let npcFeedback = JSON.parse(App.Savepoint.tempData.npcFeedback)
    let arr = npcFeedback.filter(item => {
      return /^!!STAR/.test(item.content)
    })
    if (arr.length > 0) {
      App.TweenUtils.fadeOut(this.hr)
    }
  }
}