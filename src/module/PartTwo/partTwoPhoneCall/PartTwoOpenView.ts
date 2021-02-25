class PartTwoPhoneCallView extends BaseEuiView {
  public animation: egret.MovieClip;
  public constructor($controller:BaseController, $parent:eui.Group) {
    super($controller, $parent)
  }

  public initUI(): void {
    super.initUI()
  }

  public initData(): void {
    super.initData()
    let json = RES.getRes('phoneCall_json');
    let img = RES.getRes('phoneCall_png');

    console.log(img, json)

    let mcFactory = new egret.MovieClipDataFactory(json,img);
    this.animation = new egret.MovieClip(mcFactory.generateMovieClipData());
    // 设置居中
    
    this.animation.anchorOffsetX = -(egret.MainContext.instance.stage.stageWidth / 2);
    this.animation.anchorOffsetY = -(egret.MainContext.instance.stage.stageWidth *0.8);
    const group = new eui.Group()
    group.addChild(this.animation)
    this.addChild(group)
    
    this.animation.gotoAndPlay('2', 1)
    this.animation.addEventListener(egret.Event.COMPLETE,()=>{
      App.ControllerManager.applyFunc(ControllerConst.PartTwoHome,PartTwoHomeConsts.HomeNext)
    },this)
  }

  public onAddStage(): void {

  }
  public animationEnd(): void {
    // super.animationEnd();
    // this.opendoorMC.gotoAndPlay('two', 1)
  }
  

}