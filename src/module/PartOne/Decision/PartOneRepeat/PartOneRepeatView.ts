class PartOneRepeatView extends DDI.BaseTalk {
  public showType: boolean = true;

  public constructor($controller:BaseController, $parent:eui.Group) {
    super($controller, $parent)
    this.addEventListener(eui.UIEvent.ADDED_TO_STAGE, this.onAddedToStage, this)
  }

  public direction: string;

  public initData(): void {
    super.initData();
    // this.topTriangle.visible = false;
    this.interval = 60;
  }
  public initTalk(): void {
    super.initTalk();
    CommonInit.initTalk({
      borderWidth: 2,
      borderColor:Common.ME,
      backgroundColor: 0xffffff,
      backgroundAlpha: 1,
      marginBottom: 45,
      buttonColor: Common.ME,
      hrSource: "",
      buttonPosition: DDI.POSITION.LEFT,
      buttonText: App.Localize('Common.roleNameOne'),
    }, this)
  }

  public onAddedToStage(): void {
    this.startAnimation();

    let array = EGGSHELL.filter(item => {
      return item.yySimulationAchievementMeta.id == 2020101
    })

    if (array.length <= 0) {
      this.initEggshell();
    }
    
  }

  private initEggshell(): void {
    let save = App.Savepoint.takeSavepoint();

    if (save.questionInfo && save.questionInfo.questionId) {
      if (save.questionInfo.questionId == 20201022 && save.questionInfo.answers[0] == 2020102202) {
        // console.log('真有你的哦')
        App.ViewManager.open(ViewConst.PartOneEggshell)
        this.showType = false
        this.alpha = 0;

        let longTap = {
          const: [ViewConst.PartOneBloom],
          callback: [
            () => {
              App.ControllerManager.applyFunc(
                ControllerConst.PartOneBloom,
                PartOneBloomConst.changeLabel,
                "既让下属承担自己的责任，又给出了必要的支持！墙都不扶就服你~"
              );
              App.ControllerManager.applyFunc(
                ControllerConst.PartOneBloom,
                PartOneBloomConst.changeImage,
                "oneCai_png"
              );
              App.ControllerManager.applyFunc(
                ControllerConst.PartOneHome,
                PartOneHomeConsts.judgeIndex,
                -1
              );
              App.ControllerManager.applyFunc(
                ControllerConst.PartOneHome,
                PartOneHomeConsts.banTouch,
                false
              )
            },
          ],
          // action: App.TweenUtils.fadeOut.bind(this, this)
        };
        App.ControllerManager.applyFunc(
          ControllerConst.PartOneHome,
          PartOneHomeConsts.pushArr,
          longTap
        );
      }
    }
  }

  public afterStartType(): void {
    super.afterStartType();
    console.log('here 监听')
    // this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.tapItem, this)
  }

  public beforeStartType(): void {
    super.beforeStartType();
    App.ControllerManager.applyFunc(ControllerConst.PartOneHome, PartOneHomeConsts.banTouch, false);
  }

  public startTyped(): void {
    super.startTyped();
    setTimeout(() => {
      App.ControllerManager.applyFunc(ControllerConst.PartOneHome, PartOneHomeConsts.banTouch, true)
    }, 300);
  }

  public startAnimation(): void {
    // App.ControllerManager.applyFunc(ControllerConst.PartOneHome, PartOneHomeConsts.banTouch, false);
    this.label.alpha = 0;
    this.alpha = 1;
    //动画执行过程中 添加遮盖防止过快点击
    App.DecisionCover.loading(window['stage'], '',0.0000000001)
    console.log('startAnimation')
    App.TweenUtils.enLarge(this.contentGroup).call(()=>{
      this.label.alpha = 1;
      this.showType && this.startType()
      this.showType = true;
      //关闭遮罩
      App.DecisionCover.hideLoadingfalse()
    })
  }

}