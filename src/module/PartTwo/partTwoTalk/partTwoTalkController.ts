class partTwoTalkController extends BaseController {

  private partTwoTalkView: partTwoTalkView;
  constructor() {
    super()

    this.partTwoTalkView = new partTwoTalkView(this, LayerManager.UI_Popup)
    App.ViewManager.register(ViewConst.partTwoTalk, this.partTwoTalkView);

    this.registerFunc(partTwoTalkConsts.changeLabel, this.changeLabel, this)

    this.registerFunc(partTwoTalkConsts.outAnimation, this.outAnimation, this)

  }

  private changeLabel(args): void {
    this.partTwoTalkView.changeLabel(args);
  }
  private outAnimation(): egret.Tween {
    return this.partTwoTalkView.outAnimation();
  }
}