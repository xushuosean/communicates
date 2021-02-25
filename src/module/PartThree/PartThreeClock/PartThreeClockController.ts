class PartThreeClockController extends BaseController {

  private partThreeClockView: PartThreeClockView;
  constructor() {
    super()

    this.partThreeClockView = new PartThreeClockView(this, LayerManager.UI_Popup)
    App.ViewManager.register(ViewConst.PartThreeClock, this.partThreeClockView);

    this.registerFunc(PartThreeClockConst.outAnimation, this.outAnimation, this)
  }

  private outAnimation(): egret.Tween {
    return this.partThreeClockView.outAnimation();
  }

}