class PartTwoLongTapController extends BaseController {
  private PartTwoLongTapView: PartTwoLongTapView;

  public constructor() {
    super();

    // 初始化UI
    this.PartTwoLongTapView = new PartTwoLongTapView(this, LayerManager.UI_Popup);
    App.ViewManager.register(ViewConst.PartTwoLongTap, this.PartTwoLongTapView);

    this.registerFunc(PartTwoLongTapConst.outAnimation, this.outAnimation, this)
  }
  private outAnimation(): egret.Tween {
    return this.PartTwoLongTapView.outAnimation();
  }

}