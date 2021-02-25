class PartOneTalkController extends BaseController {
  private partOneTalkView: PartOneTalkView;

  public constructor() {
    super();
    
    this.partOneTalkView = new PartOneTalkView(this, LayerManager.UI_Popup)
    App.ViewManager.register(ViewConst.PartOneTalk, this.partOneTalkView)

    this.registerFunc(PartOneTalkConst.changeButtonText, this.changeButtonText, this)
    
    this.registerFunc(PartOneTalkConst.outAnimation, this.outAnimation, this)

    this.registerFunc(PartOneTalkConst.changeLabel, this.changeLabel, this)
  }

  private changeButtonText(text: string): void {
    this.partOneTalkView.changeButtonText(text)
  }

  private outAnimation(): egret.Tween {
    return this.partOneTalkView.outAnimation();
  }

  private changeLabel(text: string): void {
    CommonInit.initTalk({
      text: text
    }, this.partOneTalkView)
  }

}