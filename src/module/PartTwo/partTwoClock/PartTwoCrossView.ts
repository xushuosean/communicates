class PartTwoClockView extends BaseEuiView {
  public animation1: egret.MovieClip;
  public animation2: egret.MovieClip;
    constructor($controller:BaseController, $parent:eui.Group) {
      super($controller, $parent);

      this.addEventListener(eui.UIEvent.ADDED_TO_STAGE, this.onAddToStage, this)
    }

  public initData(): void {
    super.initData();
  }

  public initUI(): void {
    super.initUI();
    this.width = 640;
    this.height = 1136;
  }

  public onAddToStage(): void {
    this.initAnimation();
  }
  public initAnimation(){
    let json1 = RES.getRes("clock2_1_json");
    let img1 = RES.getRes("clock2_1_png");

    let json2 = RES.getRes("clock2_2_json");
    let img2 = RES.getRes("clock2_2_png");
    
    let mcFactory1 = new egret.MovieClipDataFactory(json1,img1);
    this.animation1 = new egret.MovieClip(mcFactory1.generateMovieClipData());

    
    let mcFactory2 = new egret.MovieClipDataFactory(json2,img2);
    this.animation2 = new egret.MovieClip(mcFactory2.generateMovieClipData());

    this.animation1.anchorOffsetX = -this.stage.stageWidth/2
    this.animation1.anchorOffsetY = -this.stage.stageHeight/2
    this.animation2.anchorOffsetX = -this.stage.stageWidth/2
    this.animation2.anchorOffsetY = -this.stage.stageHeight/2

    const group = new eui.Group()
    group.percentWidth = 100;
    group.percentHeight = 100;


    this.addChild(group)
    group.addChild(this.animation1)
    group.addChild(this.animation2)
    
    this.animation2.visible = false;

    this.animation1.gotoAndPlay("1",1)
    this.animation1.addEventListener(egret.Event.COMPLETE,()=>{
      this.animation1.visible = false;
      this.animation2.visible = true;
      this.animation2.gotoAndPlay("1",1);
      this.animation2.addEventListener(egret.Event.COMPLETE,()=>{
        this.outAnimation(group)
      },this)
    },this)
  }
  public outAnimation(group){
    let clicked = false;
    group.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
      if(clicked){
        return;
      }
      clicked = true;
      this.animation2.visible = false;
      App.ControllerManager.applyFunc(ControllerConst.PartTwoHome,PartTwoHomeConsts.HomeNext)
    },this)
  }
}