

class PartTwoEggshellView extends BaseEuiView {

  public eggMC: UniteMovieClip
  public group: eui.Group;

  public constructor($controller:BaseController, $parent:eui.Group) {
    super($controller, $parent)

    this.addEventListener(eui.UIEvent.ADDED_TO_STAGE, this.onAddedToStage, this)
  }

  private onAddedToStage(): void {

    this.group = new eui.Group();
    this.group.left = this.group.right = this.group.top = this.group.bottom = 0;

    

    let str = 'moment2_1,moment2_2';

    App.ControllerManager.applyFunc(ControllerConst.PartTwoHome, PartTwoHomeConsts.banTouch, false)

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
    // App.DecisionCover.hideLoadingfalse();
    console.log('here run dddd')
  // egret.MainContext.instance.stage.removeChildAt(6)
    setTimeout(()=>{
      const length = egret.MainContext.instance.stage.$children.length;
      egret.MainContext.instance.stage.$children[length-1].visible = false;
    },300)

    
    this.eggMC.gotoAndPlay('moment2_1', 1)
    this.eggMC.setAllZero();
    
    this.eggMC.addEventListener(egret.Event.COMPLETE, () => {
      this.eggMC.gotoAndPlay('moment2_2', 1)
      this.eggMC.setAllZero();
      this.group.once(egret.TouchEvent.TOUCH_TAP, (e: egret.TouchEvent) => {
        e.preventDefault();
        e.stopImmediatePropagation();
        console.log('here run tap')
        App.TweenUtils.fadeOut(this).call(() => {
          App.ViewManager.close(ViewConst.PartTwoEggshell)
          App.ControllerManager.applyFunc(ControllerConst.PartTwoHome, PartTwoHomeConsts.banTouch, true)
          App.ControllerManager.applyFunc(ControllerConst.PartTwoRepeat, PartTwoRepeatConsts.startAnimation)
        })
      }, this)
    }, this)
    
  }

}