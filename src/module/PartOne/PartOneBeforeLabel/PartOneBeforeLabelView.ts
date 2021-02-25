class PartOneBeforeLabelView extends DDI.BaseLabel {

  public constructor($controller:BaseController, $parent:eui.Group) {
    super($controller, $parent)

    this.addEventListener(eui.UIEvent.ADDED_TO_STAGE, this.onAddedToStage, this)
  }

  public initLabel(): void {
    CommonInit.initLabel({
      text: App.Localize('PartOne.beforeLabel'),
      borderColor: Common.SUB_COLOR,
      borderWidth: 4,
      backgroundAlpha: Common.LABEL_ALPHA
    }, this)
  }

  public onAddedToStage(): void {
    this.startAnimation();

    this.initLabel();
  }

  public startAnimation(): void {
    App.TweenUtils.enLarge(this.contentGroup)
  }

}