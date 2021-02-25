class PartOneBorderController extends BaseController {

  private partOneBorderView: PartOneBorderView;
  constructor() {
    super()

    this.partOneBorderView = new PartOneBorderView(this, LayerManager.UI_Popup)
    App.ViewManager.register(ViewConst.PartOneBorder, this.partOneBorderView);

    this.registerFunc(PartOneBorderConst.changeLabel, this.changeLabel, this)

    this.registerFunc(PartOneBorderConst.outAnimation, this.outAnimation, this)
  }

  private changeLabel(args): void {
    CommonInit.initLabel({
      text: args
    }, this.partOneBorderView)
  }

  private outAnimation(): egret.Tween {
    return this.partOneBorderView.outAnimation();
  }
}