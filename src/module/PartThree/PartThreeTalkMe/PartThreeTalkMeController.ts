class PartThreeTalkMeController extends BaseController {

  private partThreeTalkMeView: PartThreeTalkMeView;
  constructor() {
    super()

    this.partThreeTalkMeView = new PartThreeTalkMeView(this, LayerManager.UI_Popup)
    App.ViewManager.register(ViewConst.PartThreeTalkMe, this.partThreeTalkMeView);

    this.registerFunc(PartThreeTalkMeConst.changeLabel, this.changeLabel, this);

    this.registerFunc(PartThreeTalkMeConst.outAnimation, this.outAnimation, this)
  }

  private changeLabel(args): void {
    this.partThreeTalkMeView.changeLabel(args);
  }

  private outAnimation(): egret.Tween {
    return this.partThreeTalkMeView.outAnimation();
  }
}
