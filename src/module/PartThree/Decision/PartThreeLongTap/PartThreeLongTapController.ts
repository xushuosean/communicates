class PartThreeLongTapController extends BaseController {
  private partThreeLongTapView: PartThreeLongTapView;

  public constructor() {
    super();

    // 初始化UI
    this.partThreeLongTapView = new PartThreeLongTapView(this, LayerManager.UI_Popup);
    App.ViewManager.register(ViewConst.PartThreeLongTap, this.partThreeLongTapView);

    this.registerFunc(PartThreeLongTapConst.outAnimation, this.outAnimation, this)
  }

  private outAnimation(): egret.Tween {
    return this.partThreeLongTapView.outAnimation();
  }

}