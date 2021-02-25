class PartTwoLongTapController1 extends BaseController {
  private PartTwoLongTapView: PartTwoLongTapView1;

  public constructor() {
    super();

    // 初始化UI
    this.PartTwoLongTapView = new PartTwoLongTapView1(this, LayerManager.UI_Popup);
    App.ViewManager.register(ViewConst.PartTwoLongTap1, this.PartTwoLongTapView);

    this.registerFunc(PartTwoLongTapConst1.outAnimation, this.outAnimation, this)
  }
  private outAnimation(): egret.Tween {
    return this.PartTwoLongTapView.outAnimation();
  }

}