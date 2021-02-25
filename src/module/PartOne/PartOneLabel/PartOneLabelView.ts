class PartOneLabelView extends DDI.BaseLabel {

  public constructor($controller:BaseController, $parent:eui.Group) {
    super($controller, $parent)

    this.addEventListener(eui.UIEvent.ADDED_TO_STAGE, this.onAddedToStage, this)
  }

  public initData(): void {
    super.initData();

    typeof App.Localize('PartOne.label') == 'string' ? this.labelText = App.Localize('PartOne.label') : this.labelTextFlow = (App.Localize('PartOne.label') as any)
    this.rectBorderColor = Common.SUB_COLOR;
    this.rectBorderWidth = 4;
    this.rectBackgroundAlpha = Common.LABEL_ALPHA;

    this.initLabel();
  }

  private initLabel(): void {
    CommonInit.initLabel({
      text: App.Localize('PartOne.label'),
      // borderColor: 
    }, this)
  }

  public initUI(): void {
    super.initUI();
  }

  public onAddedToStage(): void {
    this.startAnimation();
  }

  public startAnimation(): void {
    App.TweenUtils.enLarge(this.contentGroup)
  }

  public changeLabel(args): void {
    typeof args == 'string' ? this.labelText = args : this.labelTextFlow = args
  }
}