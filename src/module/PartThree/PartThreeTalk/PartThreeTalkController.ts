class PartThreeTalkController extends BaseController {
  private PartThreeTalkView: PartThreeTalkView;

  public constructor() {
    super();
    
    this.PartThreeTalkView = new PartThreeTalkView(this, LayerManager.UI_Popup)
    App.ViewManager.register(ViewConst.PartThreeTalk, this.PartThreeTalkView)

    this.registerFunc(PartThreeTalkConst.changeButtonText, this.changeButtonText, this)
    
    this.registerFunc(PartThreeTalkConst.outAnimation, this.outAnimation, this)

    this.registerFunc(PartThreeTalkConst.changeLabel, this.changeLabel, this)
  }

  private changeButtonText(text: string): void {
    this.PartThreeTalkView.changeButtonText(text)
  }

  private outAnimation(): egret.Tween {
    return this.PartThreeTalkView.outAnimation();
  }

  private changeLabel(text: string): void {
    CommonInit.initTalk({
      borderWidth: 2,
      borderColor: Common.KESHENG,
      text: text
    }, this.PartThreeTalkView)
  }

}