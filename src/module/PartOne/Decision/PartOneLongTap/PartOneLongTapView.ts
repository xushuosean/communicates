class PartOneLongTapView extends DDI.MiddleBaseLongTap {
  public constructor($controller:BaseController, $parent:eui.Group) {
    super($controller, $parent)

    this.root = 1;
  }

  public ToNext(mask: eui.Rect, ct: eui.Group): void {
        //发送进度条
        // 保存点发送start
        const currentSavePoint = App.Savepoint.takeSavepoint();

        //长按成功后更新进度条
        currentSavePoint.percentNumber += App.Step.stepMap.stageOneStep
        //如果累加后超出100，则取消累加
        if(currentSavePoint.percentNumber >= 100){
          currentSavePoint.percentNumber -= App.Step.stepMap.stageOneStep
        }
        App.ControllerManager.applyFunc(ControllerConst.TopBar,PartOneTopBarConst.changeInfo,{
          stageNumber:1,
          percentNumber:currentSavePoint.percentNumber
        })
        //进度条end
        Api.Simulation.updateSavePoint(App.UserInfo.takeCardId(), currentSavePoint).then(res => {
          console.log(res)
        })
    super.ToNext(mask, ct);
        // 通过npcFeedBack动态创建决策树当前题的array
        App.ControllerManager.applyFunc(ControllerConst.PartOneHome, PartOneHomeConsts.createJudge, JSON.parse(App.Savepoint.tempData.npcFeedback))

        // 跳转到下一个view
        App.ControllerManager.applyFunc(ControllerConst.PartOneHome, PartOneHomeConsts.HomeNext)
        mask.width = 0;
    
        // 并更改optionDesc
        App.ControllerManager.applyFunc(ControllerConst.PartOneRepeat, PartOneRepeatConsts.changeLabel, ct["_data"].optionDesc )
  }

}