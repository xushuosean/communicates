class PartTwoOpenController extends BaseController {
  private partTwoOpenView: PartTwoOpenView;

  public constructor() {
      super();

      // 初始化UI
      this.partTwoOpenView = new PartTwoOpenView(this, LayerManager.UI_Popup);
      App.ViewManager.register(ViewConst.PartTwoOpen, this.partTwoOpenView);
  }
}