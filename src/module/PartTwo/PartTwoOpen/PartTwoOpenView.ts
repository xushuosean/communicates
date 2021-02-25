class PartTwoOpenView extends BaseOpen {

  public constructor($controller:BaseController, $parent:eui.Group) {
    super($controller, $parent)
  }

  public initUI(): void {
    super.initUI()
    this.title.text = App.Localize("PartTwo.envelop_title");
    this.tipsContent.text = App.Localize("PartTwo.envelop_tipText");
  }

  public initData(): void {
    super.initData()
  }

  public onAddStage(): void {
    /**
     * 开始动画效果
     */
    this.startAnimation();
  }

  // 动画初始化完成的回调
  public mcInited(): void {
    super.mcInited();
  }

  public animationEnd(): void {
    super.animationEnd();
    this.opendoorMC.gotoAndPlay('two', 1)
  }
  
  public callback(): void {
    super.callback();
    console.log('开门的回调执行')
    App.ControllerManager.applyFunc(ControllerConst.PartTwoHome, PartTwoHomeConsts.HomeNext)
    //此处会延迟到第二个view展示时，误用！
    // App.ControllerManager.applyFunc(ControllerConst.PartTwoHome, PartTwoHomeConsts.banTouch, false)
  }

}