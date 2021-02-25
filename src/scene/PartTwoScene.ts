class PartTwoScene extends BaseScene {
  public constructor() {
    super();
  }

  public onEnter(): void {
    super.onEnter();

    //添加该Scene使用的层级
    this.addLayer(LayerManager.UI_Main);
    this.addLayer(LayerManager.UI_Popup);
    this.addLayer(LayerManager.UI_Message);
    this.addLayer(LayerManager.UI_Tips);
    //temp
    App.ViewManager.open(ViewConst.PartTwoHome)
    //over

    App.ViewManager.open(ViewConst.PartTwoHome)
    //根据保存点打开对应的Basehome页面
    // const savePoint = App.Savepoint.takeSavepoint();
    // // console.log(savePoint.questionInfo.questionId)
    // if (savePoint) {
    //   const baseHomeName = savePoint.baseHomeName;
    //   if (baseHomeName === "PartTwoHomeView") {
    //     //第一个baseHome
    //     // App.ViewManager.open(ViewConst.partTwoHome)
    //   }
    // }else{
    //   // App.ViewManager.open(ViewConst.partTwoHome)
    // }
  }
}
