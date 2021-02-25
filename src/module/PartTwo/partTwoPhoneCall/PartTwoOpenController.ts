class PartTwoPhoneCallController extends BaseController {
  private view: PartTwoPhoneCallView;

  public constructor() {
      super();
      // 初始化UI
      this.view = new PartTwoPhoneCallView(this, LayerManager.UI_Popup);
      App.ViewManager.register(ViewConst.PartTwoPhoneCall, this.view);
  }
}