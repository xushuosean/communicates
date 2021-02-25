class PartOneBeforeController extends BaseController{

    private partOneBeforeView: PartOneBeforeView;

    constructor(){
        super();
        this.partOneBeforeView = new PartOneBeforeView(this, LayerManager.UI_Popup);
        App.ViewManager.register(ViewConst.PartOneBefore, this.partOneBeforeView);
    }


  }