class PartOneFirstController extends BaseController{

    private partOneFirstView: PartOneFirstView;

    constructor(){
        super();
        this.partOneFirstView = new PartOneFirstView(this, LayerManager.UI_Popup);
        App.ViewManager.register(ViewConst.PartOneFirst, this.partOneFirstView);
    }

  }