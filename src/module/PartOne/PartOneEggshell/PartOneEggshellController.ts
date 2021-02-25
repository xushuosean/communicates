class PartOneEggshellController extends BaseController {
  private partOneEggshellView: PartOneEggshellView;

  public constructor() {
    super();
    
    this.partOneEggshellView = new PartOneEggshellView(this, LayerManager.UI_Popup)
    App.ViewManager.register(ViewConst.PartOneEggshell, this.partOneEggshellView)
  }

}