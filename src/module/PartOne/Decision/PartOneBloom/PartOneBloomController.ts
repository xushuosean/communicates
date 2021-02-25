class PartOneBloomController extends BaseController {
  private partOneBloomView: PartOneBloomView;

  public constructor() {
    super();
    
    this.partOneBloomView = new PartOneBloomView(this, LayerManager.UI_Popup)
    App.ViewManager.register(ViewConst.PartOneBloom, this.partOneBloomView)

    this.registerFunc(PartOneBloomConst.changeLabel, this.changeLabel, this);
    this.registerFunc(PartOneBloomConst.changeImage, this.changeImage, this)
  }

  private changeLabel(text: string): void {
    console.log('here run text' + text)
    this.partOneBloomView.setLabel(text)
  }

  private changeImage(source: string): void {
    this.partOneBloomView.initImage(source)
  }


}