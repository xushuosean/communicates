class BaseEnd extends BaseEuiView {

  public animationGroup: eui.Group;
  public buttonGroup: eui.Group;
  public buttonLabel: eui.Label;
  public sleepLabel: eui.Label;

  public html: BasePopHtml = null;

  public backImg: eui.Image;

  public bookShake: egret.MovieClip;

  public flowerMC: egret.MovieClip;
  constructor($controller:BaseController, $parent:eui.Group) {
    super($controller, $parent);

    this.skinName = "resource/ddi_skins/EndFlowerSkin.exml"

    this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
  }

  public initData(): void {
    super.initData();
    
    this.animationGroup.top = 160;
  }
  public initUI(): void {
    super.initUI();
  }

  public onAddToStage(): void {
    console.log(this.$children)
    this.buttonGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchTap, this)

    this.sleepLabel.addEventListener(egret.TouchEvent.TOUCH_TAP, this.sleepTap, this)

    this.backImg.visible = this.buttonGroup.visible = this.sleepLabel.visible = false;
  }

  public initBookButton(): void {

    let group: eui.Group = new eui.Group();
    group.right = 60;
    group.bottom = 120;

    group.width = group.height = 108;
  
    this.bookShake = CommonInit.initMC('bookShake_json', 'bookShake_png');

    this.bookShake.gotoAndPlay("bookShake", 3)
    
    this.bookShake.anchorOffsetX = -54
    this.bookShake.anchorOffsetY = -54

    group.addChild(this.bookShake)

    group.addEventListener(egret.TouchEvent.TOUCH_TAP, this.bookButtonTap, this)

    this.bookShake.addEventListener(egret.Event.COMPLETE, this.bookDone, this)

    this.animationGroup.addChildAt(group, 1000)
  }
  
  public bookDone(): void {
    this.bookShake.removeEventListener(egret.Event.COMPLETE, this.bookDone, this)
  }

  // 用于子类继承
  public bookButtonTap(): void {}

  public showGroupLabel(): void {
    this.buttonGroup.visible = this.sleepLabel.visible = true;
  }
  /**
   * 单击事件
   */
  public touchTap(): void {}

  public addAnimation(mc: string, type: string): void {
    let json, img;

    RES.getResAsync(`${mc}_json`).then(jo => {
      json = jo
      if (json && img) {
        this.layoutMC(json, img, type)
      }
    })

    RES.getResAsync(`${mc}_png`).then(ig => {
      img = ig
      if (json && img) {
        this.layoutMC(json, img, type)
      }
    })

  }

  private layoutMC(json, img, type): void {
    let mcFactory = new egret.MovieClipDataFactory(json,img);
    this.flowerMC = new egret.MovieClip(mcFactory.generateMovieClipData());

    this.animationGroup.addChild(this.flowerMC)

    // 当flowerMC动画调用结束后之行label的添加
    this.flowerMC.addEventListener(egret.Event.COMPLETE, this.MovieClipComplete, this)

    this.flowerMC.gotoAndPlay(type, 1)

    this.flowerMC.anchorOffsetX = -(this.animationGroup.width) / 2 - 80;

    
    this.flowerMC.anchorOffsetY = -30;

    // this.flowerMC.y = -300;
    this.flowerMC.scaleX = this.flowerMC.scaleY = 0.8;
  }

  public MovieClipComplete(): void {
    console.log(11111111111111)
    console.log(this.animationGroup)
  }

  public sleepTap(): void {
    // let userInfo = App.UserInfo.takeUserInfo()
  }
  
}