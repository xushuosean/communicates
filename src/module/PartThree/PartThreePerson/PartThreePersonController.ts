class PartThreePersonController extends BaseController {

  private partThreePersonView: PartThreePersonView;
  constructor() {
    super()

    this.partThreePersonView = new PartThreePersonView(this, LayerManager.UI_Popup)
    App.ViewManager.register(ViewConst.PartThreePerson, this.partThreePersonView);

  }

}