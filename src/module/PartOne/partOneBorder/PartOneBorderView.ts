class PartOneBorderView extends DDI.BaseLabel {

  public constructor($controller:BaseController, $parent:eui.Group) {
    super($controller, $parent)

    this.addEventListener(eui.UIEvent.ADDED_TO_STAGE, this.onAddedToStage, this)
  }

  public initData(): void {
    super.initData();
    this.initLabel();
  }

  private initLabel(): void {
    CommonInit.initLabel({
      text: App.Localize('PartOne.meetingBorder'),
      color: 0x578C86,
      borderWidth: 0,
      backgroundAlpha: 0,
      horizontalCenter: 120,
      verticalCenter: 120
    }, this)
  }

  public onAddedToStage(): void {
    this.startAnimation();
  }

  public startAnimation(): void {
    App.TweenUtils.enLarge(this.contentGroup)
  }

}