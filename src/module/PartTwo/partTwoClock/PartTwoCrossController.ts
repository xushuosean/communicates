class partTwoClockController extends BaseController {
  private view: PartTwoClockView;

  public constructor() {
    super();
    this.view = new PartTwoClockView(this, LayerManager.UI_Popup)
    App.ViewManager.register(ViewConst.partTwoClock, this.view)
  }

}