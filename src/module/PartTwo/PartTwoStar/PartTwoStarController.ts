class PartTwoStarController extends BaseController {

  private PartTwoStarView: PartTwoStarView;
  constructor() {
    super()

    this.PartTwoStarView = new PartTwoStarView(this, LayerManager.UI_Popup)
    App.ViewManager.register(ViewConst.PartTwoStar, this.PartTwoStarView);

    this.registerFunc(PartTwoStarConst.changeImg, this.changeImg, this)

    this.registerFunc(PartTwoStarConst.changeLabel, this.changeLabel, this)

    this.registerFunc(PartTwoStarConst.changeType, this.changeType, this)

    this.registerFunc(PartTwoStarConst.outAnimation, this.outAnimation, this)
  }

  private changeImg(args): void {
    this.PartTwoStarView.changeImg(args)
  }

  private changeLabel(args): void {
    this.PartTwoStarView.changeLabel(args)
  }

  private changeType(args): void {
    this.PartTwoStarView.setImgAndText(args)
  }

  private outAnimation(): egret.Tween {
    return this.PartTwoStarView.outAnimation();
  }
}