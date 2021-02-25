class TopBarPopupController1 extends BaseController{

    private view: TopBarPopup1;
    // private reStepOneBoardView:ReStepOneBoardView;
    constructor(){
        super();
        this.view = new TopBarPopup1(this, LayerManager.UI_Tips);
        App.ViewManager.register(ViewConst.TopBarPopup1, this.view);
    }
  }