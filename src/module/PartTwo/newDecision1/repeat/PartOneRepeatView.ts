class PartTwoRepeatView1 extends DDI.BaseTalk {
  public showType: boolean = true;

  public constructor($controller:BaseController, $parent:eui.Group) {
    super($controller, $parent)
    this.addEventListener(eui.UIEvent.ADDED_TO_STAGE, this.onAddedToStage, this)
  }

  public direction: string;

  public initData(): void {
    super.initData();
    // this.topTriangle.visible = false;
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
      buttonPosition: DDI.POSITION.LEFT,
      buttonText: App.Localize('Common.roleNameOne')
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
    App.ControllerManager.applyFunc(ControllerConst.PartTwoHome, PartTwoHomeConsts.banTouch, false);
  }

  public startTyped(): void {
    super.startTyped();
    setTimeout(() => {
      App.ControllerManager.applyFunc(ControllerConst.PartTwoHome, PartTwoHomeConsts.banTouch, true)
    }, 300);
  }

  public startAnimation(): void {
    this.label.alpha = 0;
    //动画执行过程中 添加遮盖防止过快点击
    App.DecisionCover.loading(window['stage'], '',0.0000000001)

    App.TweenUtils.enLarge(this.contentGroup).call(()=>{
      this.label.alpha = 1;
      this.showType && this.startType()
      this.showType = true;
      //关闭遮罩
      App.DecisionCover.hideLoadingfalse()
    })
  }

}