class PartOneLongTapController extends BaseController {
  private partOneLongTapView: PartOneLongTapView;

  public constructor() {
    super();

    // 初始化UI
    this.partOneLongTapView = new PartOneLongTapView(this, LayerManager.UI_Popup);
    App.ViewManager.register(ViewConst.PartOneLongTap, this.partOneLongTapView);

    this.registerFunc(PartOneLongTapConst.outAnimation, this.outAnimation, this)
  }
  private outAnimation(): egret.Tween {
    return this.partOneLongTapView.outAnimation();
  }

}