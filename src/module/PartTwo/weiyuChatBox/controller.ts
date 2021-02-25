class PartTwoWeiyuSayController extends BaseController {

    private view: PartTwoWeiyuSayView;
    constructor() {
      super()
      this.view = new PartTwoWeiyuSayView(this, LayerManager.UI_Popup)
      App.ViewManager.register(ViewConst.partTwoWeiyuSay, this.view);
    }
  }