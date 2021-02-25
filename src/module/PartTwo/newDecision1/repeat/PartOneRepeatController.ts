class PartTwoRepeatController1 extends BaseController {

  private PartTwoRepeatView: PartTwoRepeatView1;

  constructor() {
    super()

    this.PartTwoRepeatView = new PartTwoRepeatView1(this, LayerManager.UI_Popup)
    App.ViewManager.register(ViewConst.PartTwoRepeat1, this.PartTwoRepeatView);

    this.registerFunc(PartTwoRepeatConsts1.changeLabel, this.changeLabel, this)
    this.registerFunc(PartTwoRepeatConsts1.changeLabel, this.changeLabel, this)
    this.registerFunc(PartTwoRepeatConsts1.outAnimation, this.outAnimation, this)

    this.registerFunc(PartTwoRepeatConsts1.startAnimation, this.startAnimation, this)

  }

  private changeLabel(args): void {
    console.log('文字修改传到了这里')
    CommonInit.initTalk({
      borderWidth: 2,
      borderColor: Common.ME,
      text: args,
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