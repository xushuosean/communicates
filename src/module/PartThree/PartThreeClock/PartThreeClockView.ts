class PartThreeClockView extends BaseEuiView {

  public clockMC: UniteMovieClip = new UniteMovieClip();
  public constructor($controller:BaseController, $parent:eui.Group) {
    super($controller, $parent)

    this.addEventListener(eui.UIEvent.ADDED_TO_STAGE, this.onAddedToStage, this)
  }

  public initData(): void {
    super.initData();
  }

  public onAddedToStage(): void {
    App.ControllerManager.applyFunc(ControllerConst.PartThreeHome, PartThreeHomeConst.banTouch, false)
  }

  public initUI(): void {
    super.initUI();

    this.initMC();
  }

  public async initMC(): Promise<void> {

    let mcStr = "clock3_1,clock3_2"

    await Promise.all(mcStr.split(',').map(async (item) => {
      return (async ()=> {
        let mc = await CommonInit.initMCAsync(`${item}_json`, `${item}_png`)
        this.clockMC.push(item, mc)
      })()
    }))


    this.addChild(this.clockMC)

    console.log('here will run clock3_1')

    this.clockMC.gotoAndPlay('clock3_1', 1)

    this.clockMC.addEventListener(egret.Event.COMPLETE, this.clock1, this)

    this.clockMC.scaleX = this.clockMC.scaleY = 0.9  

    this.clockMC.anchorOffsetX = 20;

    this.clockMC.anchorOffsetY = -40;
  }

  private clock1(): void {
    this.clockMC.removeEventListener(egret.Event.COMPLETE, this.clock1, this)
    this.clockMC.gotoAndPlay('clock3_2', 1)

    this.clockMC.addEventListener(egret.Event.COMPLETE, this.clock2, this)
  }

  private clock2(): void {
    this.clockMC.removeEventListener(egret.Event.COMPLETE, this.clock2, this);
    App.ControllerManager.applyFunc(ControllerConst.PartThreeHome, PartThreeHomeConst.banTouch, true)
  }

  public outAnimation(): egret.Tween {
    return App.TweenUtils.fadeOut(this);
  }

}