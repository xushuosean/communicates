class PartTwoRepeatController extends BaseController {

  private PartTwoRepeatView: PartTwoRepeatView;

  constructor() {
    super()

    this.PartTwoRepeatView = new PartTwoRepeatView(this, LayerManager.UI_Popup)
    App.ViewManager.register(ViewConst.PartTwoRepeat, this.PartTwoRepeatView);

    this.registerFunc(PartTwoRepeatConsts.changeLabel, this.changeLabel, this)
    this.registerFunc(PartTwoRepeatConsts.changeLabel, this.changeLabel, this)
    this.registerFunc(PartTwoRepeatConsts.outAnimation, this.outAnimation, this)

    this.registerFunc(PartTwoRepeatConsts.startAnimation, this.startAnimation, this)

  }

  private changeLabel(args): void {
    console.log('文字修改传到了这里')
    CommonInit.initTalk({
      text: args,
      borderWidth: 2,
      borderColor: Common.ME,
    }, this.PartTwoRepeatView)
  }


  /**
   * 出场动画效果
   */
  private outAnimation(): egret.Tween {
    return this.PartTwoRepeatView.outAnimation();
  }

  /**
   * 入场动画效果
   */
  private startAnimation(): void {
    this.PartTwoRepeatView.startAnimation();
  }

}