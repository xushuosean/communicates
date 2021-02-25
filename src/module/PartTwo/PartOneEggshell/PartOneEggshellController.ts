class PartTwoEggshellController extends BaseController {
  private partOneEggshellView: PartTwoEggshellView;

  public constructor() {
    super();
    
    this.partOneEggshellView = new PartTwoEggshellView(this, LayerManager.UI_Popup)
    App.ViewManager.register(ViewConst.PartTwoEggshell, this.partOneEggshellView)
  }

}