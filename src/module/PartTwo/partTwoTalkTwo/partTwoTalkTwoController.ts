class partTwoTalkTwoController extends BaseController {

  private partTwoTalkTwoView: partTwoTalkTwoView;
  constructor() {
    super()

    this.partTwoTalkTwoView = new partTwoTalkTwoView(this, LayerManager.UI_Popup)
    App.ViewManager.register(ViewConst.partTwoTalkTwo, this.partTwoTalkTwoView);

    this.registerFunc(partTwoTalkConsts.changeLabel, this.changeLabel, this)
    this.registerFunc(partTwoTalkConsts.changePosition, this.changePosition, this)
    this.registerFunc(partTwoTalkConsts.changeHrPosition, this.changeHrPosition, this)

    this.registerFunc(partTwoTalkTwoConsts.outAnimation, this.outAnimation, this)

  }

  private changeLabel(args): void {
    this.partTwoTalkTwoView.changeLabel(args);
  }

  private changePosition(args): void {
    this.partTwoTalkTwoView.changePosition(args);
  }

  private changeHrPosition(): void {
    // this.partTwoTalkTwoView.changeHrPosition();
  }
  
  private outAnimation(): egret.Tween {
    return this.partTwoTalkTwoView.outAnimation();
  }

}