class PartTwoCrossView extends BaseEuiView {
    // group id
    public crossGroup: eui.Group

    // mc动画
    public crossMC: UniteMovieClip;

    constructor($controller:BaseController, $parent:eui.Group) {
      super($controller, $parent);
      this.skinName = "resource/skins/CrossSkin.exml"

      this.addEventListener(eui.UIEvent.ADDED_TO_STAGE, this.onAddToStage, this)
    }

  public initData(): void {
    super.initData();
  }

  public initUI(): void {
    super.initUI();
  }

  public onAddToStage(): void {
    this.startAnimation();
  }

  public startAnimation(): void {
    this.addAnimation();
  }

  public addAnimation(): void {

    this.crossMC = new UniteMovieClip();

    let str = 'cross1,cross2';
    str.split(',').map(item => {
      let json = RES.getRes(`${item}_json`);
      let img = RES.getRes(`${item}_png`);

      let mcFactory = new egret.MovieClipDataFactory(json,img);

      this.crossMC.push(item, new egret.MovieClip(mcFactory.generateMovieClipData()))
    })

    this.crossGroup.addChild(this.crossMC)
    this.crossGroup.bottom = 200;

    this.crossMC.gotoAndPlay('cross1', 1)
    this.crossMC.addEventListener(egret.Event.COMPLETE, () => {
      this.crossMC.gotoAndPlay('cross2', 1)
    }, this)

    // this.crossMC.x = 62.5 - this.crossMC.width * 0.7;
    // this.crossMC.y = (this.crossGroup.height - this.crossMC.height) - this.crossMC.height * 0.7;

    this.crossMC.scaleX = 0.8;
    this.crossMC.scaleY = 0.8;
  }

  public outAnimation(): egret.Tween {
    return App.TweenUtils.fadeOut(this)
  }
}