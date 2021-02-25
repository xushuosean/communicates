class PartOneLabelController extends BaseController {

  private partOneLabelView: PartOneLabelView;
  constructor() {
    super()

    this.partOneLabelView = new PartOneLabelView(this, LayerManager.UI_Popup)
    App.ViewManager.register(ViewConst.PartOneLabel, this.partOneLabelView);

    this.registerFunc(PartOneLabelConst.changeLabel, this.changeLabel, this)

    this.registerFunc(PartOneLabelConst.outAnimation, this.outAnimation, this)
  }

  private changeLabel(args): void {
    this.partOneLabelView.changeLabel(args)
  }

  private outAnimation(): egret.Tween {
    return this.partOneLabelView.outAnimation();
  }
}