class PartThreeRepeatController extends BaseController {

  private partThreeRepeatView: PartThreeRepeatView;
  constructor() {
    super()

    this.partThreeRepeatView = new PartThreeRepeatView(this, LayerManager.UI_Popup)
    App.ViewManager.register(ViewConst.PartThreeRepeat, this.partThreeRepeatView);

    this.registerFunc(PartThreeRepeatConst.changeLabel, this.changeLabel, this)
    this.registerFunc(PartThreeRepeatConst.changeHrPosition, this.changeHrPosition, this)

    this.registerFunc(PartThreeRepeatConst.outAnimation, this.outAnimation, this)

    this.registerFunc(PartThreeRepeatConst.startAnimation, this.startAnimation, this)

  }

  private changeLabel(args): void {
    // this.partThreeRepeatView.changeLabel(args);
    CommonInit.initTalk({
      borderWidth: 2,
      borderColor: Common.ME,
      text: args,
      hrSource: ""
    }, this.partThreeRepeatView)
  }

  private changeHrPosition(): void {
    this.partThreeRepeatView.changeHrPosition();
  }

  /**
   * 出场动画效果
   */
  private outAnimation(): egret.Tween {
    return this.partThreeRepeatView.outAnimation();
  }

  /**
   * 入场动画效果
   */
  private startAnimation(): void {
    this.partThreeRepeatView.startAnimation();
  }

}