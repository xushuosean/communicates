class PartOneRepeatController extends BaseController {

  private partOneRepeatView: PartOneRepeatView;

  constructor() {
    super()

    this.partOneRepeatView = new PartOneRepeatView(this, LayerManager.UI_Popup)
    App.ViewManager.register(ViewConst.PartOneRepeat, this.partOneRepeatView);

    this.registerFunc(PartOneRepeatConsts.changeLabel, this.changeLabel, this)
    this.registerFunc(PartOneRepeatConsts.changeLabel, this.changeLabel, this)
    this.registerFunc(PartOneRepeatConsts.outAnimation, this.outAnimation, this)

    this.registerFunc(PartOneRepeatConsts.startAnimation, this.startAnimation, this)

  }

  private changeLabel(args): void {
    console.log('文字修改传到了这里')
    CommonInit.initTalk({
      text: args,
      borderWidth: 2,
      borderColor:Common.ME,
    }, this.partOneRepeatView)
  }


  /**
   * 出场动画效果
   */
  private outAnimation(): egret.Tween {
    return this.partOneRepeatView.outAnimation();
  }

  /**
   * 入场动画效果
   */
  private startAnimation(): void {
    this.partOneRepeatView.startAnimation();
  }

}