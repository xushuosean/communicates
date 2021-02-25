class PartThreeTeacherController extends BaseController {

  private partThreeTeacherView: PartThreeTeacherView;
  constructor() {
    super()

    this.partThreeTeacherView = new PartThreeTeacherView(this, LayerManager.UI_Popup)
    App.ViewManager.register(ViewConst.partThreeTeacher, this.partThreeTeacherView);

    this.registerFunc(PartThreeTeacherConst.changeLabel, this.changeLabel, this)
    this.registerFunc(PartThreeTeacherConst.changeHrPosition, this.changeHrPosition, this)

    this.registerFunc(PartThreeTeacherConst.outAnimation, this.outAnimation, this)

  }

  private changeLabel(args): void {
    let mood = App.ControllerManager.applyFunc(ControllerConst.partThreeNPC, partThreeNPCConst.getMood)
    CommonInit.initTalk({
      text: args.content,
      hrSource: mood,
      animation: false
    }, this.partThreeTeacherView)
  }

  private changeHrPosition(): void {
    // this.partTwoTalkTwoView.changeHrPosition();
  }

  private outAnimation(): egret.Tween {
    return this.partThreeTeacherView.outAnimation();
  }

}