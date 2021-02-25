class PartOneBeforeView extends BaseEuiView {

  public a1MC: egret.MovieClip;

  public constructor($controller:BaseController, $parent:eui.Group) {
    super($controller, $parent)
  }


  public initData(): void {
    super.initData();
  }

  public initUI(): void {
    super.initUI();
    this.initMC();
  }

  public initMC(): void {
    this.a1MC = CommonInit.initMC('a1_json', 'a1_png')

    this.a1MC.anchorOffsetX = -375;
    this.a1MC.anchorOffsetY = -375;

    this.a1MC.gotoAndPlay('a1', 1);
    this.addChildAt(this.a1MC, 1);

    this.a1MC.addEventListener(egret.Event.COMPLETE, this.animationComplete, this);
  }

  private animationComplete():void {
    App.ControllerManager.applyFunc(ControllerConst.PartOneHome,PartOneHomeConsts.HomeNext);
  }

}