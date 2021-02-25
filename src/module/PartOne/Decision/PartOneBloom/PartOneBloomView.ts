class PartOneBloomView extends BaseEuiView {

  public bloomMC: egret.MovieClip;
  public group: eui.Group;

  public breakMC: egret.MovieClip;

  public label: DDI.BaseLabel;
  public button: DDI.BaseButton;

  public image: eui.Image;

  public constructor($controller:BaseController, $parent:eui.Group) {
    super($controller, $parent)

    this.addEventListener(eui.UIEvent.ADDED_TO_STAGE, this.onAddedToStage, this)
  }

  public touchTap(): void {
    this.stage.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.touchTap, this)
    App.TweenUtils.fadeOut(this).call(() => {
      App.ViewManager.close(ViewConst.PartOneBloom)
      App.ControllerManager.applyFunc(ControllerConst.PartOneHome, PartOneHomeConsts.HomeNext)
    })
  }

  private onAddedToStage(): void {

    this.initLabel();
    this.bloom();

    this.initEgg();

    this.initButton();
  }

  public initButton(): void {
    let button: DDI.BaseButton = new DDI.BaseButton(new BaseController(), new eui.Group());

    button.label.text = "难忘瞬间";
    button.top = 590;
    button.contentGroup.right = 200;
    button.label.left = button.label.right = 10;
    button.label.top = button.label.bottom = 20;
    button.rect.ellipseHeight = button.rect.ellipseWidth = 20;
    button.contentGroup.height = 65;
    button.label.size = 26;
    button.rect.fillColor = Common.MAIN_COLOR;
    this.addChild(button)

    App.TweenUtils.fadeIn(button).call(() => {
      this.bloomMC.gotoAndPlay('bloom', 1);
      this.breakMC.gotoAndPlay('break', 1);
    })
  }

  private bloom(): void {
    let img = RES.getRes(`bloom_png`)
    let json = RES.getRes(`bloom_json`)

    let mcFactory = new egret.MovieClipDataFactory(json, img)
    this.bloomMC = new egret.MovieClip(mcFactory.generateMovieClipData())

    this.bloomMC.anchorOffsetX = -(egret.MainContext.instance.stage.stageWidth / 2);

    this.bloomMC.anchorOffsetY = -430;

    this.addChild(this.bloomMC)
  }

  private initLabel(): void {
    this.label = new DDI.BaseLabel(new BaseController(), new eui.Group());
    this.addChild(this.label)
    this.label.contentGroup.verticalCenter = undefined;
    this.label.contentGroup.top = 360;
    this.label.contentGroup.width = 500;
    this.label.rect.fillColor = Common.MAIN_COLOR;
    this.label.rect.fillAlpha = 1;
    this.label.label.top = this.label.label.bottom = 20;
    this.label.label.left = this.label.label.right = 20;
    this.label.contentGroup.height = undefined;
    this.label.label.verticalAlign = egret.VerticalAlign.MIDDLE;
    this.label.rect.strokeColor = 0xffffff;
    this.label.label.textColor = 0xffffff;
  }

  public setLabel(text: string): void {
    this.label.label.text = text;
  }

  public initImage(source: string): void {
    this.image = new eui.Image();
    this.image.source = source;
    this.image.right = 112;
    this.image.top = 520;
    this.image.width = 80;
    this.image.height = 112;
    this.image.alpha = 0;
    this.image.anchorOffsetX = 80;
    this.image.anchorOffsetY = 112;
    this.addChildAt(this.image, 1)
  }

  private initEgg(): void {
    let img = RES.getRes(`break_png`)
    let json = RES.getRes(`break_json`)

    let mcFactory = new egret.MovieClipDataFactory(json, img)
    this.breakMC = new egret.MovieClip(mcFactory.generateMovieClipData())

    this.breakMC.anchorOffsetX = -(egret.MainContext.instance.stage.stageWidth + 120);

    this.breakMC.anchorOffsetY = -850;

    this.addChild(this.breakMC)

    this.breakMC.scaleX = this.breakMC.scaleY = 0.7;

    this.breakMC.addEventListener(egret.Event.COMPLETE, this.breakMCEnd, this);
  }

  private breakMCEnd(): void {
    this.breakMC.removeEventListener(egret.Event.COMPLETE, this.breakMCEnd, this);
    App.TweenUtils.fadeIn(this.image).call(() => {
      this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchTap, this)
    })
  }
}