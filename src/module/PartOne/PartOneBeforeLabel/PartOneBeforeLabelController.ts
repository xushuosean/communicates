class PartOneBeforeLabelController extends BaseController {

  private partOneBeforeLabelView: PartOneBeforeLabelView;
  constructor() {
    super()

    this.partOneBeforeLabelView = new PartOneBeforeLabelView(this, LayerManager.UI_Popup)
    App.ViewManager.register(ViewConst.PartOneBeforeLabel, this.partOneBeforeLabelView);

    this.registerFunc(PartOneBeforeLabelConst.changeLabel, this.changeLabel, this)

    this.registerFunc(PartOneBeforeLabelConst.outAnimation, this.outAnimation, this)
  }

  private changeLabel(args): void {
    CommonInit.initLabel({
      text: args
    }, this.partOneBeforeLabelView)
  }

  private outAnimation(): egret.Tween {
    return this.partOneBeforeLabelView.outAnimation();
  }
}