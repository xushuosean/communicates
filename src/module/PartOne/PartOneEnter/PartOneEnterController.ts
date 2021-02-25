class GuidePointerController extends BaseController{

    private view: GuidePointer;
    // private reStepOneBoardView:ReStepOneBoardView;
    constructor(){
        super();
        this.view = new GuidePointer(this, LayerManager.UI_Popup);
        App.ViewManager.register(ViewConst.GuidePointer, this.view);

        this.registerFunc(GuidePointerConst.outAnimation, this.outAnimation, this)
    }

    private outAnimation(): egret.Tween {
        return this.view.outAnimation();
    }
  }