class PartOneFirstView extends BaseEuiView {

  public partOneFirstMC: egret.MovieClip;

  public constructor($controller:BaseController, $parent:eui.Group) {
    super($controller, $parent)

  }

  public initData(): void {
    super.initData();
  }

  public initUI(): void {
    super.initUI();
    App.ControllerManager.applyFunc(ControllerConst.TopBar,PartOneTopBarConst.toggleProgressBarVisibiity,true);
    this.initMC();
  }

  public async initMC(): Promise<void> {
    this.partOneFirstMC = CommonInit.initMC('msg_json', 'msg_png')

    this.addChild(this.partOneFirstMC);

    this.partOneFirstMC.gotoAndPlay('action', 1);

    this.partOneFirstMC.anchorOffsetX = -200;
    this.partOneFirstMC.anchorOffsetY = -750;

    this.partOneFirstMC.addEventListener(egret.Event.COMPLETE, this.animationComplete, this);
  }

  private animationComplete(): void {
    this.partOneFirstMC.removeEventListener(egret.Event.COMPLETE, this.animationComplete, this);

    App.ControllerManager.applyFunc(ControllerConst.PartOneHome, PartOneHomeConsts.banTouch, true)
  }

}