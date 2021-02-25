// 先执行ui，后执行data
class PartThreeLabelView extends DDI.BaseLabel {

  public constructor($controller:BaseController, $parent:eui.Group) {
    super($controller, $parent)

    this.addEventListener(eui.UIEvent.ADDED_TO_STAGE, this.onAddedToStage, this)
  }

  public initData(): void {
    super.initData();
    this.initLabel();
  }

  /**
   * 初始化文案
   */
  public initLabel(): any {
    CommonInit.initLabel({
      text: App.Localize('PartThree.labelOne'),
      borderColor: Common.SUB_COLOR,
      borderWidth: 4,
      backgroundAlpha: Common.LABEL_ALPHA
    }, this)
  }

  public onAddedToStage(): void {
    this.startAnimation();
  }

  public startAnimation(): void {
    App.TweenUtils.enLarge(this.contentGroup)
  }

  /**
   * 修改文本
   * @param args 传入的、需要修改的文字
   */
  public changeLabel(args): void {
    CommonInit.initLabel({
      text: args
    }, this)
  }
}