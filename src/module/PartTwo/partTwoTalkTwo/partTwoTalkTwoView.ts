class partTwoTalkTwoView extends DDI.BaseLabel {

  public hr: eui.Image;

  public constructor($controller:BaseController, $parent:eui.Group) {
    super($controller, $parent)

    this.addEventListener(eui.UIEvent.ADDED_TO_STAGE, this.onAddedToStage, this)

  }

  public direction: string;

  public initData(): void {
    super.initData();
    this.topTriangle.visible = false;
    this.rectBackgroudColor = 0xffffff;
    this.labelText = App.Localize('PartTwo.talk2One') as any;
    this.addButton('许利');
    this.changePosition('bottom')
  }

  public initUI(): void {
    super.initUI();
    this.rect.fillAlpha = 1;
  }

  public drawTriangle(): void {
    let img: eui.Image = new eui.Image();
    img.source = 'topTriangle_png'
    this.contentGroup.addChild(img)
    img.x = 120;
    img.y = -24;
    
  }

  public addButton(text: string): void {
    let btn = new DDI.BaseButton(new BaseController(), new eui.Group());
    btn.text = text
    btn.x = 400;
    btn.y = -20;
    btn.label.size = 24;
    btn.color = 0x4C6982;
    btn.contentGroup.width = 120;
    btn.radius = 30;
    this.contentGroup.addChild(btn)
  }

  public onAddedToStage(): void {
    this.startAnimation();

  }

  public labelTextChanged(): void {
    super.labelTextChanged();

    console.log(this.labelText)
    // this.startType();
  }

  public startAnimation(): void {
    this.addHr();
    App.TweenUtils.enLarge(this.contentGroup)
    this.hr.alpha = 0;
    App.TweenUtils.fadeIn(this.hr)
  }

  public changeLabel(text): void {
    typeof text == 'string' ? this.labelText = text : this.labelTextFlow = text
  }

  public addHr(): void {
    if (!this.hr) {
      this.hr = new eui.Image();
      this.hr.source = 'normal_png';
      this.hr.horizontalCenter = 0;
      this.hr.bottom = -380;
      this.addChildAt(this.hr, 0)
    }
  }

  public changePosition(args): void {
    switch (args) {
      case 'center':
        this.contentGroup.verticalCenter = 0;
        break;
      case 'bottom':
        this.contentGroup.verticalCenter = undefined;
        this.contentGroup.bottom = 100;
        break;
      default: 
        this.contentGroup.verticalCenter = 0;
    }
    
  }

  public beforeOut(): any {
    super.beforeOut();
    App.TweenUtils.fadeOut(this.hr)
  }

}