class PartThreeTeacherView extends DDI.BaseTalk {

  public constructor($controller:BaseController, $parent:eui.Group) {
    super($controller, $parent)
  }

  public direction: string;

  public initData(): void {
    super.initData();
  }

  public initTalk(): void {
    super.initTalk();
    CommonInit.initTalk({
      borderWidth: 0,
      backgroundColor: 0x000000,
      backgroundAlpha: 0.45,
      color: 0xffffff,
      size: 24,
      hrTop: 150
    }, this)

    this.btn.visible = false;
    this.alphaLabel.height = 0;
  }

  public startAnimation(): void {
    // 控制label框的动效
    App.TweenUtils.enLarge(this.contentGroup)

    let npcFeedback = JSON.parse(App.Savepoint.tempData.npcFeedback)
    let arr = npcFeedback.filter(item => {
      return /^!!STAR/.test(item.content)
    })
    if (arr.length > 0) {
      App.TweenUtils.fadeIn(this.hr)
    }
  }

  public beforeOut(): void {
    App.TweenUtils.fadeOut(this.hr)
    if (!App.ControllerManager.applyFunc(ControllerConst.PartThreeHome, PartThreeHomeConst.getJudgeStatus)) {
      let currentSavePoint = App.Savepoint.takeSavepoint();
      delete currentSavePoint.questionInfo;
      App.Savepoint.cacheSavepoint(currentSavePoint);
    }
  }

}