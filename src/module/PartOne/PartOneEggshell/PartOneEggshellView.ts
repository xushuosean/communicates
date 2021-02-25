

class PartOneEggshellView extends BaseEuiView {

  public eggMC: UniteMovieClip
  public group: eui.Group;

  private hasTap: boolean = false;

  public constructor($controller:BaseController, $parent:eui.Group) {
    super($controller, $parent)

    this.addEventListener(eui.UIEvent.ADDED_TO_STAGE, this.onAddedToStage, this)
  }

  private onAddedToStage(): void {
    this.group = new eui.Group();
    this.group.left = this.group.right = this.group.top = this.group.bottom = 0;
    let str = 'eggshell,eggshell1';

    console.log('ban touch false')
    App.ControllerManager.applyFunc(ControllerConst.PartOneHome, PartOneHomeConsts.banTouch, false)

    this.eggMC = new UniteMovieClip();

    this.eggMC.left = this.eggMC.right = this.eggMC.top = this.eggMC.bottom = 0;

    

    str.split(',').map(item => {
      let img = RES.getRes(`${item}_png`)
      let json = RES.getRes(`${item}_json`)

      let mcFactory = new egret.MovieClipDataFactory(json, img)
      this.eggMC.push(item, new egret.MovieClip(mcFactory.generateMovieClipData()))
    })

    this.group.addChild(this.eggMC)
    this.addChild(this.group)
    console.log(this.$parent)
    // this.group.addEventListener(egret.TouchEvent.TOUCH_TAP, (e: egret.TouchEvent) => {
    //   if (!this.hasTap) {
    //     e.stopImmediatePropagation();

    //     App.ControllerManager.applyFunc(ControllerConst.PartOneHome, PartOneHomeConsts.banTouch, false)
    //     this.hasTap = true;
    //     App.TweenUtils.fadeOut(this).call(() => {
    //       App.ControllerManager.applyFunc(ControllerConst.PartOneRepeat, PartOneRepeatConsts.startAnimation)
    //       App.ViewManager.close(ViewConst.PartOneEggshell)
    //     })
    //   }
    // }, this)
    this.eggMC.gotoAndPlay('eggshell', 1)

    this.eggMC.setAllZero();
    
    this.eggMC.addEventListener(egret.Event.COMPLETE, () => {
      this.eggMC.gotoAndPlay('eggshell1', 1)
      this.eggMC.setAllZero();
      setTimeout(() => {
        this.group.addEventListener(egret.TouchEvent.TOUCH_TAP, (e: egret.TouchEvent) => {
          if (!this.hasTap) {
            e.stopImmediatePropagation();
    
            App.ControllerManager.applyFunc(ControllerConst.PartOneHome, PartOneHomeConsts.banTouch, false)
            this.hasTap = true;
            App.TweenUtils.fadeOut(this).call(() => {
              App.ControllerManager.applyFunc(ControllerConst.PartOneRepeat, PartOneRepeatConsts.startAnimation)
              App.ViewManager.close(ViewConst.PartOneEggshell)
            })
          }
        }, this)
      }, 1000);
    }, this)

  }

}