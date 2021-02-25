class PartOneOpenView extends BaseOpen {

  public constructor($controller:BaseController, $parent:eui.Group) {
    super($controller, $parent)
  }

  public initData(): void {
    super.initData();
    this.initOpen();
  }

  private initOpen(): void {
    CommonInit.initOpen({
      title: App.Localize('PartOne.startTitle'),
      tipsText: App.Localize('PartOne.startContent'),
      tipsColor: Common.TIPS_COLOR
    }, this)
  }

  public onAddStage(): void {
    this.startAnimation();
  }

  public animationEnd(): void {
    super.animationEnd();
    this.opendoorMC.gotoAndPlay('one', 1)
  }
  
  public callback(): void {
    super.callback();
    App.ControllerManager.applyFunc(ControllerConst.PartOneHome, PartOneHomeConsts.HomeNext);
    App.ControllerManager.applyFunc(ControllerConst.PartOneHome, PartOneHomeConsts.banTouch, true);
  }

}