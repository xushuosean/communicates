class PartTwoRectLabelController extends BaseController {

  private partTwoRectLabelView: PartTwoRectLabelView;
  constructor() {
    super()

    this.partTwoRectLabelView = new PartTwoRectLabelView(this, LayerManager.UI_Popup)
    App.ViewManager.register(ViewConst.partTwoRectLabel, this.partTwoRectLabelView);

    this.registerFunc(partTwoRectLabelConsts.changeLabel, this.changeLabel, this)

    this.registerFunc(partTwoRectLabelConsts.outAnimation, this.outAnimation, this)
  }

  private changeLabel(indexName): void {
    console.log('changeLabe',indexName)
    this.partTwoRectLabelView.changeLabel(indexName)
  }

  private outAnimation(): egret.Tween {
    return this.partTwoRectLabelView.outAnimation();
  }
}