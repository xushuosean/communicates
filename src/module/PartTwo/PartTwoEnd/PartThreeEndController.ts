class PartTwoEndController extends BaseController{

  private partTwoEnd: PartTwoEndView;
  constructor(){
      super();
      this.partTwoEnd = new PartTwoEndView(this, LayerManager.UI_Popup);
      App.ViewManager.register(ViewConst.partTwoEnd, this.partTwoEnd);
  }
}