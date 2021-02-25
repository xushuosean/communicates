class PartThreeTalkMeView extends DDI.BaseLabel {

  public constructor($controller:BaseController, $parent:eui.Group) {
    super($controller, $parent)

    this.addEventListener(eui.UIEvent.ADDED_TO_STAGE, this.onAddToStage, this)
  }

  public topTriangle: eui.Image;
  public bottomTriangle: eui.Image;

  public initUI(): void {
    super.initUI();
  }

  public initData(): void {
    super.initData();
    this.rectBorderWidth = 0;
    this.rectBackgroundAlpha = 1;
    this.rectBackgroudColor = 0xE0F2F4;
    this.labelText = App.Localize('PartThree.talkMeOne');
    this.contentGroup.verticalCenter = undefined;
    this.contentGroup.bottom = 250;
    this.bottomTriangle.visible = true;
    this.addButton('我')
  }

  public addButton(text: string): void {
    let btn = new DDI.BaseButton(new BaseController(), new eui.Group());
    btn.text = text
    btn.x = 60;
    btn.y = -20;
    btn.color = 0x5AB8C4;
    btn.contentGroup.width = 140;
    btn.radius = 30;
    this.contentGroup.addChild(btn)
  }

  public changeLabel(text: string): void {
    // this.labelFlow = text;
  }

  public onAddToStage(): void {
    this.addEventListener(eui.UIEvent.ADDED_TO_STAGE, this.onAddToStage, this)
    this.startAnimation();
  }

  public startAnimation(): void {
    App.TweenUtils.enLarge(this.contentGroup)
  }

}
