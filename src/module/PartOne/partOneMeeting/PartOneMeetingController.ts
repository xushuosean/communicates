class PartOneMeetingController extends BaseController {

  private partOneMeetingView: PartOneMeetingView;
  constructor() {
    super()

    this.partOneMeetingView = new PartOneMeetingView(this, LayerManager.UI_Popup)
    App.ViewManager.register(ViewConst.PartOneMeeting, this.partOneMeetingView);

    this.registerFunc(PartOneLabelConst.changeLabel, this.changeLabel, this)

    this.registerFunc(PartOneLabelConst.outAnimation, this.outAnimation, this)
  }

  private changeLabel(args): void {
    this.partOneMeetingView.changeLabel(args)
  }

  private outAnimation(): egret.Tween {
    return this.partOneMeetingView.outAnimation();
  }
}