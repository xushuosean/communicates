class partTwoCrossController extends BaseController {
  private partTwoCrossView: PartTwoCrossView;

  public constructor() {
    super();
    this.partTwoCrossView = new PartTwoCrossView(this, LayerManager.UI_Popup)
    App.ViewManager.register(ViewConst.partTwoCross, this.partTwoCrossView)

    this.registerFunc(PartTwoCrossConst.outAnimation, this.outAnimation, this)
  }

  private outAnimation(): egret.Tween {
    return this.partTwoCrossView.outAnimation();
  }

}