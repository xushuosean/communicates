class PartTwoBloomController extends BaseController {
  private PartTwoBloomView: PartTwoBloomView;

  public constructor() {
    super();
    
    this.PartTwoBloomView = new PartTwoBloomView(this, LayerManager.UI_Popup)
    App.ViewManager.register(ViewConst.PartTwoBloom, this.PartTwoBloomView)

    this.registerFunc(PartTwoBloomConst.changeLabel, this.changeLabel, this);
    this.registerFunc(PartTwoBloomConst.changeImage, this.changeImage, this)
  }

  private changeLabel(text: string): void {
    console.log('here run text' + text)
    this.PartTwoBloomView.setLabel(text)
  }

  private changeImage(source: string): void {
    this.PartTwoBloomView.initImage(source)
  }


}