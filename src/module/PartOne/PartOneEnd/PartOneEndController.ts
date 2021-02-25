class PartOneEndController extends BaseController{

  private partOneEnd: PartOneEndView;
  constructor(){
      super();
      this.partOneEnd = new PartOneEndView(this, LayerManager.UI_Popup);
      App.ViewManager.register(ViewConst.PartOneEnd, this.partOneEnd);
      egret.localStorage.removeItem('npcName');
  }
}