class PartTwoRepeatView extends DDI.BaseTalk {
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
    console.log('initRepeatTALK---------')
    CommonInit.initTalk({
      borderWidth: 2,
      borderColor: Common.ME,
      // backgroundColor: 0xffffff,
      backgroundAlpha: 1,
      marginBottom: 45,
      buttonColor: Common.ME,
      hrSource: "",
      buttonPosition: DDI.POSITION.LEFT,
      buttonText: App.Localize('Common.roleNameOne'),
    }, this)
  }

  public onAddedToStage(): void {
    let array = EGGSHELL.filter(item => {
      return item.yySimulationAchievementMeta.id == 2020102
    })
    if (array.length <= 0) {
      this.initEggshell();
    }else{
      this.startAnimation()
    }
  }
  private initEggshell(): void {
    let save = App.Savepoint.takeSavepoint();
    if (save.questionInfo && save.questionInfo.questionId) {
      if (save.questionInfo.questionId == 20201108 && save.questionInfo.answers[0] == 2020110802) {
        // console.log('真有你的哦')
        App.ControllerManager.applyFunc(ControllerConst.PartTwoHome, PartTwoHomeConsts.banTouch, false)
        App.ViewManager.open(ViewConst.PartTwoEggshell);
        
        this.contentGroup.visible = false;
        // this.showType = false
        let longTap = {
          const: [ViewConst.PartTwoBloom],
          callback: [
            () => {
              App.ControllerManager.applyFunc(
                ControllerConst.PartTwoBloom,
                PartTwoBloomConst.changeLabel,
                "果然最能体察人心的人是你！是你！就是你！"
              );
              App.ControllerManager.applyFunc(
                ControllerConst.PartTwoBloom,
                PartTwoBloomConst.changeImage,
                "twoCai_png"
              );
              App.ControllerManager.applyFunc(
                ControllerConst.PartTwoHome,
                PartTwoHomeConsts.judgeIndex,
                -1
              );
            },
          ],
          // action: App.TweenUtils.fadeOut.bind(this, this)
        };
        App.ControllerManager.applyFunc(
          ControllerConst.PartTwoHome,
          PartTwoHomeConsts.pushArr,
          longTap
        );
      }else{
        this.startAnimation();
      }
    }
  }

  public afterStartType(): void {
    super.afterStartType();
    this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.tapItem, this)
  }

  public beforeStartType(): void {
    super.beforeStartType();
    App.ControllerManager.applyFunc(ControllerConst.PartTwoHome, PartTwoHomeConsts.banTouch, false);
  }

  public startTyped(): void {
    super.startTyped();
    setTimeout(() => {
      App.ControllerManager.applyFunc(ControllerConst.PartTwoHome, PartTwoHomeConsts.banTouch, true)
    }, 300);
  }

  public startAnimation(): void {
    console.log('开始repeat动画')
    this.contentGroup.visible = true;
    this.label.alpha = 0;
    //动画执行过程中 添加遮盖防止过快点击
    App.DecisionCover.loading(window['stage'], '',0.0000000001)

    App.TweenUtils.enLarge(this.contentGroup).call(()=>{
      this.label.alpha = 1;
      this.showType && this.startType()
      this.showType = true;
      //关闭遮罩
      App.DecisionCover.hideLoadingfalse()
    })
  }

}