class PartOneOpenController extends BaseController {
  private partOneOpenView: PartOneOpenView;

  public constructor() {
      super();

      // 初始化UI
      this.partOneOpenView = new PartOneOpenView(this, LayerManager.UI_Popup);
      App.ViewManager.register(ViewConst.PartOneOpen, this.partOneOpenView);
  }
}