class PartThreeRepeatView extends DDI.BaseTalk {

  public constructor($controller:BaseController, $parent:eui.Group) {
    super($controller, $parent)
  }

  public initData(): void {
    super.initData();
    console.log('here is button group')
    this.topTriangle.visible = false;
    this.rectBackgroudColor = 0xffffff;
    this.interval = 60;
  }

  public initTalk(): void {
    super.initTalk();
    CommonInit.initTalk({
      borderWidth: 2,
      borderColor: Common.ME,
      backgroundColor: 0xffffff,
      backgroundAlpha: 1,
      marginBottom: 45,
      buttonColor: Common.ME,
      hrSource: "",
      buttonText: App.Localize('Common.roleNameOne'),
      buttonPosition: DDI.POSITION.LEFT,
    }, this)
  }

  public onAddedToStage(): void {
    this.startAnimation();
  }

  public afterStartType(): void {
    super.afterStartType();
    this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.tapItem, this)
  }

  public beforeStartType(): void {
    super.beforeStartType();
    App.ControllerManager.applyFunc(ControllerConst.PartThreeHome, PartThreeHomeConst.banTouch, false);
  }

  public startTyped(): void {
    super.startTyped();
    // 等待事件循环快结束的时候再调用
    setTimeout(() => {
      App.ControllerManager.applyFunc(ControllerConst.PartThreeHome, PartThreeHomeConst.banTouch, true)
    }, 300);
  }

  public startAnimation(): void {
    this.label.alpha = 0;
    //动画执行过程中 添加遮盖防止过快点击
    App.DecisionCover.loading(window['stage'], '',0.0000000001)

    App.TweenUtils.enLarge(this.contentGroup).call(()=>{
      this.label.alpha = 1;
      this.startType()
      //关闭遮罩
      App.DecisionCover.hideLoadingfalse()
    })
  }

  public changeHrPosition(): void {
    let x = (this.stage.stageWidth - this.hr.width) / 2;
    this.hr.left = undefined
    egret.Tween.get(this.hr).to({ x: x}, 400)
  }

}