class PartThreeLabelController extends BaseController {

  private partThreeLabelView: PartThreeLabelView;
  constructor() {
    super()

    this.partThreeLabelView = new PartThreeLabelView(this, LayerManager.UI_Popup)
    App.ViewManager.register(ViewConst.PartThreeLabel, this.partThreeLabelView);

    this.registerFunc(PartThreeLabelConst.changeLabel, this.changeLabel, this)

    this.registerFunc(PartThreeLabelConst.outAnimation, this.outAnimation, this)
  }

  private changeLabel(args): void {
    this.partThreeLabelView.changeLabel(args)
  }

  private outAnimation(): egret.Tween {
    return this.partThreeLabelView.outAnimation();
  }
}