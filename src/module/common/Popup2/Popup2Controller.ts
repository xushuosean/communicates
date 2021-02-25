class TopBarPopupController2 extends BaseController{

    private view: TopBarPopup2;
    // private reStepOneBoardView:ReStepOneBoardView;
    constructor(){
        super();
        this.view = new TopBarPopup2(this, LayerManager.UI_Tips);
        App.ViewManager.register(ViewConst.TopBarPopup2, this.view);
    }
  }