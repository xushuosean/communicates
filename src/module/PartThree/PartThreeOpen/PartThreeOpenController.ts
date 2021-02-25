class PartThreeOpenController extends BaseController {
  private partThreeOpenView: PartThreeOpenView;

  public constructor() {
      super();

      // 初始化UI
      this.partThreeOpenView = new PartThreeOpenView(this, LayerManager.UI_Popup);
      App.ViewManager.register(ViewConst.PartThreeOpen, this.partThreeOpenView);
  }
}