class PartThreeOpenView extends BaseOpen {

  public constructor($controller:BaseController, $parent:eui.Group) {
    super($controller, $parent)
  }

  public initUI(): void {
    super.initUI()
    this.initOpen();
  }

  private initOpen(): void {
    CommonInit.initOpen({
      title: App.Localize('PartThree.openTitle'),
      tipsText: App.Localize('PartThree.openContent'),
      tipsColor: Common.TIPS_COLOR
    }, this)
  }

  public onAddStage(): void {
    /**
     * 开始动画效果
     */
    this.startAnimation();
  }

  public animationEnd(): void {
    super.animationEnd();
    this.opendoorMC.gotoAndPlay('three', 1)
  }
  
  public callback(): void {
    super.callback();
    App.ControllerManager.applyFunc(ControllerConst.PartThreeHome, PartThreeHomeConst.HomeNext)
    App.ControllerManager.applyFunc(ControllerConst.PartThreeHome, PartThreeHomeConst.banTouch, true)
  }

}