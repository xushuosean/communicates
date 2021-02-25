class BaseOpen extends BaseEuiView {
  // 上半部分
  public topSection: eui.Group;
  public closeBtn: eui.Image;

  public title: eui.Label;

  // 动画group
  public mcGroup: eui.Group;
  public opendoorMC: egret.MovieClip;

  public titleGroup: eui.Group;

  // 下半部分
  public bottomSection: eui.Group

  public topSectionImg: eui.Image;
  public bottomSectionImg: eui.Image;

  public contentGroup: eui.Group

  public tips: eui.Label;
  public tipsContent: eui.Label;

  public tipsGroup: eui.Group;

  public constructor($controller:BaseController, $parent:eui.Group) {
    super($controller, $parent)

    this.skinName = 'resource/ddi_skins/BaseEnvelope.exml'

    this.addEventListener(eui.UIEvent.ADDED_TO_STAGE, this.onAddStage, this)
  }

  public initUI(): void {
    super.initUI()
    this.topSection.visible = true
    this.bottomSection.visible = true
    this.topSection.height = this.topSectionImg.height = 0.45 * this.stage.stageHeight;
    this.bottomSection.height = this.bottomSectionImg.height = 0.75 * this.stage.stageHeight;

    this.initMC();

    this.tips.textColor = 0x645DE2;

    this.addReturnBtn();
    this.initDotted();
  }

  public initData(): void {
    super.initData()
  }

  private addReturnBtn(): void{
    this.closeBtn = new eui.Image();
    this.closeBtn.source = 'button_return_png';
    this.closeBtn.scaleX = 1;
    this.closeBtn.scaleY = 1;
    this.closeBtn.left = 0;
    this.closeBtn.top = 24;
    this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.return,this);
    this.addChildAt(this.closeBtn,10);

  }

  private return(e:egret.Event){
    e.stopImmediatePropagation();
    App.ViewManager.open(ViewConst.TopBarPopup1);
  }

  private initDotted(): void {
    let img: eui.Image = new eui.Image();
    img.source = 'dotted_png';
    
    this.tipsGroup.addChild(img)
    console.log(this.tipsGroup)
    img.y = this.tipsContent.y + this.tipsContent.size
    img.horizontalCenter = 0;
    img.scaleX = 0.85;
    img.scaleY = 0.70;
  }

  public initMC(): void {
    let json = RES.getRes('open_json');
    let img = RES.getRes('open_png');

  console.log(img, json)

    let mcFactory = new egret.MovieClipDataFactory(json,img);
    this.opendoorMC = new egret.MovieClip(mcFactory.generateMovieClipData());

    this.titleGroup.addChild(this.opendoorMC)

    // 设置居中
    this.opendoorMC.anchorOffsetX = -(egret.MainContext.instance.stage.stageWidth / 2);
    
    // 设置动画下沉
    this.opendoorMC.y = 300;

    this.mcInited();

    // this.opendoorMC.scaleX = this.opendoorMC.scaleY = 0.8;
  }

  public mcInited(): void {
    // this.opendoorMC.gotoAndPlay('init', 1)
  }

  public onAddStage(): void {
    /**
     * 开始动画效果
     */
    this.startAnimation();
  }

  public startAnimation(): void {
    console.log(this)
    this.fromTop(this.topSection);
    this.fromBottom(this.bottomSection);
  }

  // 控制topSection向下运动
  private fromTop(vm): void {
    let tw = egret.Tween.get(vm);
    
    const getVmHeight = vm.height;
    // console.log(getVmHeight + 'this is getVmHeight')

    vm.y = -getVmHeight;

    tw.to({ y: 0 }, 700).call(() => {
      this.animationEnd();
    })
  }

  /**
   * 开门动画完成结束回调
   */
  public animationEnd(): void {}

  // 控制bottomSection向上运动
  private fromBottom(vm): void {
    let tw = egret.Tween.get(vm);

    vm.bottom = -vm.height;

    tw.to({ bottom: 0 }, 700).call(() => {
      this.contentGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchTap, this)
    })

  }

  // 控制topSection向上运动
  private backTop(vm): void {
    let tw = egret.Tween.get(vm);

    console.log(tw)

    const getVmHeight = vm.height;

    console.log(getVmHeight)
    
    tw.to({ y: -getVmHeight }, 700)
  }

  // 控制bottomSection向下运动
  private backBottom(vm, callback): void {
    let tw = egret.Tween.get(vm);

    tw.to({ bottom: -vm.height }, 700).call(() => {
      callback()
    })
  }

  public touchTap(): void {
    console.log('--- here run tap ')
    this.backTop(this.topSection);
    this.backBottom(this.bottomSection, this.callback)
  }
  
  public callback(): void {}

}