class TopBarController extends BaseController{

    private view: TopBar;
    // private reStepOneBoardView:ReStepOneBoardView;
    constructor(){
        super();
        this.view = new TopBar(this, LayerManager.UI_Popup);
        this.registerFunc(PartOneTopBarConst.changeInfo, this.changeInfo, this)
        App.ViewManager.register(ViewConst.TopBar, this.view);
        this.registerFunc(PartOneTopBarConst.toggleProgressBarVisibiity, this.toggleProgressBarVisibiity, this)
        this.registerFunc(PartOneTopBarConst.modifyTopBarVisibleProps, this.modifyTopBarVisibleProps, this)
        
        //App.ControllerManager.applyFunc(ControllerConst.PartOne,PartOneTopBarConst.toggleProgressBarVisibiity,true)
    }
    private changeInfo({stageNumber,percentNumber}) {
        this.view.setCurrentStage(stageNumber)
        this.view.setPercent(percentNumber)
    }
    private toggleProgressBarVisibiity(visible:boolean) {
        this.view.toggleProgressBarVisibiity(visible)
    }
    private modifyTopBarVisibleProps(propsObj:{ returnBtn:boolean,progressBarGroup:boolean,sceneReviewBtn:boolean }){
        console.log(propsObj)
        this.view.returnBtn.visible = propsObj.returnBtn;
        this.view.progressBarGroup.visible = propsObj.progressBarGroup;
        this.view.sceneReviewBtn.visible = propsObj.sceneReviewBtn;
        console.log(this.view)
    }
  }