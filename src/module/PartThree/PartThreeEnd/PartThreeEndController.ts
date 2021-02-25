class PartThreeEndController extends BaseController{

  private partThreeEnd: PartThreeEndView;
  constructor(){
      super();
      this.partThreeEnd = new PartThreeEndView(this, LayerManager.UI_Popup);
      App.ViewManager.register(ViewConst.PartThreeEnd, this.partThreeEnd);
  }
}